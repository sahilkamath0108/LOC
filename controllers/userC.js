require("dotenv").config();

const UserSchema = require("../models/userSchema");
const CompanySchema = require("../models/companySchema");
const StaticCouponSchema = require("../models/staticCoupon");
const reviewSchema = require("../models/reviewSchema");

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


// Create user
const createUser = async (req, res) => {
    try {
      let userData = new UserSchema(req.body);
      let savedUserData = await userData.save();
      let id = savedUserData._id;
      let userMail = savedUserData.email;
  
      mailTransporter.sendMail({
        from: process.env.EMAIL,
        to: userMail,
        subject: "Thank you for creating an account with us" + savedUserData.fname,
        text: "We hope you have a good time with our app.",
      });
  
      let pswd = await UserSchema.findById({ _id: id }).select("-password"); //to hide hashed pswd
  
      const accessToken = await savedUserData.genAuthToken();
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

// Upload profile picture
const uploadPfp = async (req, res) => {
  try {
    const file = req.files.pfp
    cloudinary.uploader.upload(file.tempFilePath, (err,result)=> {
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

// Login user via email, password
const loginUser = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await UserSchema.findOne({ email: email });
  
      if (!user) {
        return res.status(400).send({ error: "User does not exist..." });
      }
  
      const withoutPswd = await UserSchema.findOne({ email: email }).select(
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

// Update interests
const updateInterests = async(req, res) => {
	try {
		userid = req.user._id;
		data = await UserSchema.findOneAndUpdate(
            {_id: userid},
            {$set: req.body}
		)
        console.log('User interests have been updated');
        res.status(200).json({
            success: true
        });
	} catch (error) {
		
	}
}

// View all coupons
const allCoupons = async(req, res) => {
  	try {
		result = await StaticCouponSchema.find().sort({createdAt: -1});
		res.status(200).json({
            success: true,
            data: result
        });
        console.log('All coupons fetched successfully');
  	} catch (error) {
		console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
  	}
}

// View coupons of interest
const interestCoupons = async(req, res) => {
	try {
		const interests = req.user.interests;
		result = await StaticCouponSchema.find();// Complete this
		res.status(200).json({
            success: true,
            data: result
        });
        console.log('All coupons fetched successfully');
  	} catch (error) {
		console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
	}
}

// Filtered coupons
const filteredCoupons = async(req, res) => {
	try {
		const category = req.body.category;
		const discountRange = req.body.discountRange;

		result = await StaticCouponSchema.find({}) // 
		// { category: { $elemMatch: { category: "", discountRange: { } } } }

		res.status(200).json({
			success: true,
			data: result
		})
	} catch (error) {
		console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
	}
}

// Get coupon
const getCoupon = async(req, res) => {
	const couponId = req.params.couponId;
	const userId = req.user._id;
	try {
		const result = await StaticCouponSchema.findOne({_id: couponid}).populate("usedBy reviews");
        console.log('Fetched coupon successfully');
        res.status(200).json({
            success: true,
			data: result
        });
	} catch (error) {
		console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
	}
}

// Use coupon
const useCoupon = async(req, res) => {
	const couponId = req.params.couponId;
	const userId = req.user._id;
	try {
		user_data = await UserSchema.findOneAndUpdate(
			{_id: userId},
			{$push: {couponsBought: couponId} })
		await user_data.save();

		coupon_data = await StaticCouponSchema.findOneAndUpdate(
            {_id: couponid},
            {$push: {usedBy: userId}, $inc: {iterations: 1} })
		await coupon_data.save();

		if (coupon_data.iterations == coupon_data.limit) {
			coupon_data = await StaticCouponSchema.findOneAndUpdate(
				{_id: couponid},
				{$set: { limitReached : true }})
			await coupon_data.save();
		}

        console.log('Coupon use has been updated in user and coupon schema');
        res.status(200).json({
            success: true
        });
	} catch (error) {
		console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
	}
}

// Write a review
const writeReview = async(req, res) => {
	const couponId = req.params.couponId;
	const userId = req.user._id;
	try {
		review_data = new reviewSchema(req.body);
      	let savedData = await review_data.save();
      let id = savedUserData._id;
      let userMail = savedUserData.email
	} catch (error) {
		console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
	}
}

// Follow a company

module.exports = {
    createUser,
    uploadPfp,
    loginUser,
    fileVerifyPfp,
	updateInterests,
	allCoupons,
	interestCoupons,
	filteredCoupons,
	getCoupon,
	useCoupon,
	writeReview
}