require("dotenv").config();

const EmployeeSchema = require("../models/userSchema");
const EmployerSchema = require("../models/employerSchema");
const JobSchema = require("../models/companySchema")

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


//create employer

const createEmployer = async (req, res) => {
    try {
      let employerData = new EmployerSchema(req.body);
      let savedEmployerData = await employerData.save();
      let id = savedEmployerData._id;
      let employerMail = savedEmployerData.email;
  
      mailTransporter.sendMail({
        from: process.env.EMAIL,
        to: employerMail,
        subject: "Thank you for creating an account with us" + savedEmployerData.fname,
        text: "We hope you have a good time with our app. Search for apps, follow employers of interest, and a lot more.",
      });
  
      let pswd = await EmployeeSchema.findById({ _id: id }).select("-password"); //to hide hashed pswd
  
      const accessToken = await savedEmployerData.genAuthToken();
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

//login user via email, password

const loginEmployer = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await EmployerSchema.findOne({ email: email });
  
      if (!user) {
        return res.status(400).send({ error: "User does not exist..." });
      }
  
      const withoutPswd = await EmployerSchema.findOne({ email: email }).select(
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
    createEmployer,
    uploadPfp,
    loginEmployer,
    fileVerifyPfp
}