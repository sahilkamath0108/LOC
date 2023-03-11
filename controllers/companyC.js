require("dotenv").config();

const UserSchema = require("../models/userSchema");
const CompanySchema = require("../models/companySchema");
const StaticCouponSchema = require("../models/staticCoupon")

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const multer = require("multer");
const cloudinary = require("cloudinary").v2

cloudinary.config({ 
  cloud_name: 'dsfgjocyn', 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true
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
        subject: "Thank you for creating an account with us" + savedCompanyData.fname,
        text: "We hope you have a good time with our app. Search for apps, follow employers of interest, and a lot more.",
      });
  
      let pswd = await EmployeeSchema.findById({ _id: id }).select("-password"); //to hide hashed pswd
  
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
      const file = req.files.pfp
      cloudinary.uploader.upload(file.tempFilePath, (err,result)=> {
        console.log(result)
        req.user.profilePic = result.url
      })
      // const buffer = req.file.buffer;
      
      await req.user.save();
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

//login user via email, password

const loginCompany = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await CompanySchema.findOne({ email: email });
  
      if (!user) {
        return res.status(400).send({ error: "User does not exist..." });
      }
  
      const withoutPswd = await CompanySchema.findOne({ email: email }).select(
        "-password"
      );
  
      if (await bcrypt.compare(password, user.password)) {
        const token = await user.genAuthToken();
        res.json({
          success: true,
          user: withoutPswd,
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

module.exports = {
    createCompany,
    uploadPfp,
    loginCompany,
    fileVerifyPfp
}