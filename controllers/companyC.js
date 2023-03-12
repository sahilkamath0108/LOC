require("dotenv").config();

const UserSchema = require("../models/userSchema");
const CompanySchema = require("../models/companySchema");
const StaticCouponSchema = require("../models/staticCoupon");

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const multer = require("multer");
const ReviewSchema = require("../models/reviewSchema");
const cloudinary = require("cloudinary").v2;
const cron = require("node-cron")
const shell = require("shelljs")

// cron.schedule("10 * * * * *", async () => {
//   console.log("hi")
//   const element = await StaticCouponSchema.find()

//   element.forEach(async (ele) => {
//     ele.$inc({ expiresInDays : -1})

//     // if(ele.expiresInDays == 1){

//     //   const company = ele.companyName

//     //   const companyFollowers = await CompanySchema.find({companyName : company}).populate("followers")
//     //   companyFollowers.followers.forEach((follower) => {
//     //     mailTransporter.sendMail({
//     //       from: process.env.EMAIL,
//     //       to: follower.email,
//     //       subject:
//     //         "A coupon might be interested in is going to b expire tommorow.",
//     //       text: "We thought you might want to look into this so you dont regret later.",
//     //     })
//     //   })

      
      
//     // }

    
//     if(ele.expiresInDays == 0){
//       ele.expired = False
//     }--
//   })

// })

function generateRandomString(length, type) {
  let result = '';
  const characters = {
    numeric: '0123456789',
    alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  };

  const chars = characters[type] || characters.alphanumeric; // default to alphanumeric if type is not specified

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

cloudinary.config({
  cloud_name: "dsfgjocyn",
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  port: 465,
});

const fileVerifyPfp = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.jpg|jpeg|png/)) {
      return callback(new Error("Incorrect file format!"));
    }
    callback(undefined, true);
  },
});

//create employer

const createCompany = async (req, res) => {
  try {
    let employerData = new CompanySchema(req.body);
    let savedCompanyData = await employerData.save();
    let id = savedCompanyData._id;
    let employerMail = savedCompanyData.email;

    mailTransporter.sendMail({
      from: process.env.EMAIL,
      to: employerMail,
      subject:
        "Thank you for creating an account with us" + savedCompanyData.companyName,
      text: "We hope you have a good time with our app. Search for apps, follow employers of interest, and a lot more.",
    });

    let pswd = await CompanySchema.findById({ _id: id }).select("-password"); //to hide hashed pswd

    const accessToken = await savedCompanyData.genAuthToken();
    res.status(201).json({
      success: true,
      data: pswd,
      token: accessToken,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//upload profile picture

const uploadPfp = async (req, res) => {
  try {
    const file = req.files.pfp;
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      console.log(result);
      req.company.profilePic = result.url;
    });
    // const buffer = req.file.buffer;

    await req.company.save();
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

//login company via email, password

const loginCompany = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const company = await CompanySchema.findOne({ email: email });

    if (!company) {
      return res.status(400).send({ error: "Company does not exist..." });
    }

    const withoutPswd = await CompanySchema.findOne({ email: email }).select(
      "-password"
    );

    if (await bcrypt.compare(password, company.password)) {
      const token = await company.genAuthToken();
      res.json({
        success: true,
        company: withoutPswd,
        token: token,
      });
    } else {
      res.status(400).json({
        error: "Wrong password",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

//view all coupons

const allCoupons = async (req, res) => {
  try {
    result = await StaticCouponSchema.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: result,
    });
    console.log("All coupons fetched successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//view profile

const viewProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: req.company,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//edit profile

const updateCompany = async (req, res) => {
  // let uname = req.params.uname;
  let email = req.user.email;

  const updates = Object.keys(req.body);
  const allowedUpdates = ["number", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates!" });
  }

  let company = await CompanySchema.findOne({ email: email });

  if (!company) {
    res.status(404).json({
      success: false,
      message: "Company not found",
    });
  } else {
    try {
      await CompanySchema.findOneAndUpdate(
        { email: email },
        { $set: req.body }
      );

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      let newPswd = await CompanySchema.findOneAndUpdate(
        { companyname: uname },
        { password: hashedPassword }
      );

      res.status(201).json({
        success: true,
        data: req.body,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
};

//post a static coupon

const postStatic = async (req, res) => {
  try {
    const newCoupon = new StaticCouponSchema(req.body);
    let coupon = await newCoupon.save();

    // const code = generateRandomString(8,coupon.type);

    const company = await CompanySchema.findOneAndUpdate(
      { email: req.user.email },
      { $push: { staticCoupon: coupon._id } }
    ).populate("followers");

    const finalCoupon = await StaticCouponSchema.findOneAndUpdate(
      { _id: coupon._id },
      { companyName: req.user.companyName, category : req.user.category}
    );

    company.followers.forEach((follower) => {
      let email = follower.email

      mailTransporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: req.user.companyName + " has posted a new coupon",
        text: "Since you follow this company on CouponCafe, we thought you would like to view their new offer",
      });
    })

    res.status(201).json({
      success: true,
      data: finalCoupon,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// analytics

const allReviews = async (req, res) => {
  try {
    const companyId = req.user._id

    const data = await ReviewSchema.find({ company: companyId })

    res.status(200).json({
      success : true,
      data : data
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//product wise bar chart

const productWiseBarChart = async(req,res) => {
  try{
  const companyId = req.user._id
  const companyName = req.user.companyName

  const couponData = await StaticCouponSchema.find({companyName : companyName})
  const array = []

  couponData.forEach((doc) => {
    let percentage = (doc.iterations/doc.limit)*100
    array.push({headline : doc.headline, percentage : percentage})
  })

  res.status(200).json({
    success: true,
    data: array
  })
}catch(err){
  res.status(500).json({
    success: false,
    message: err.message,
  })
}
}

const averageRating = async (req,res) => {
  try{
  const companyName = req.user.companyName

  const couponData = await StaticCouponSchema.find({companyName : companyName})

  
  let array = []
  couponData.forEach((doc)=>{
    let count = 0
    let average = 0
    doc.reviews.forEach((ele)=>{
      count++
      average += ele.stars
    })
    let averagefinal = average/count
    array.push({headline : doc.headline, average : averagefinal })
  })

  res.status(200).json({
    succes: true,
    data: average
  })
  }catch(err){
    res.status(500).json({
      success: false,
      message: err.message,
    })
  }
  }

module.exports = {
  createCompany,
  uploadPfp,
  loginCompany,
  fileVerifyPfp,
  allCoupons,
  viewProfile,
  updateCompany,
  postStatic,
  allReviews,
  productWiseBarChart,
  averageRating
};
