require("dotenv").config();

const UserSchema = require("../models/userSchema");
const CompanySchema = require("../models/companySchema");
const StaticCouponSchema = require("../models/staticCoupon");

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const multer = require("multer");

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
      const buffer = req.file.buffer;
      req.user.profilePic = buffer;
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

// View all coupons
const allCoupons = async (req, res) => {
  	try {
    	const interests = req.user.interests;
		result = await StaticCouponSchema.find().sort({createdAt: -1});
		res.status(200).json({
            success: true,
            data: result
        });
        console.log('All coupons fetched successfully');
  	} catch (error) {
		console.log(error);
        res.status(404).json({
            success: false,
            message: error.message
        });
  	}
}

// Filtered coupons
const filteredCoupons = async (req, res) => {
	try {
		const category = req.body.category;
		const discountRange = req.body.discountRange;

	} catch (error) {
		
	}
}

// Update interests

// Get coupons

// Write a review

module.exports = {
    createUser,
    uploadPfp,
    loginUser,
    fileVerifyPfp,
	allCoupons,
	filteredCoupons
}