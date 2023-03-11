
const UserSchema = require("../models/userSchema");
const CompanySchema = require("../models/companySchema");
const StaticCouponSchema = require("../models/staticCoupon");

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const multer = require("multer");
const ReviewSchema = require("../models/reviewSchema");
const cloudinary = require("cloudinary").v2;


const verify = async(req,res) => {
    const emailId = "sahilkamath0108@gmail.com"
    const code = req.body.code

    const user = await UserSchema.find({email : emailId})

    user.tempCode.forEach((ele)=> {
        if(ele == code){
            res.status(200).json({
                success : true,
                message : "verified user"
            })
        }else{
            res.status(404).json({
                success : false,
                message : "False"
            })
        }
    })
}

const verifyBuyer = async (req,res) => {
    try{
    const emailId = "sahilkamath0108@gmail.com"
    const code = req.body.code

    const user = await UserSchema.find({email : emailId})

    await UserSchema.findOneAndUpdate({email : emailId}, { $pull : { tempCode : code}})
    res.status(200).json({
        success : true,
        message : "Expired"
    })}catch(err){
        res.status(500).json({
            success : false,
            message : "Failed to purchase"
        })
    }
}

module.exports = {
    verify,
    verifyBuyer
}