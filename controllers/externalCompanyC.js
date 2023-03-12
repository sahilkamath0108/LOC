
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
    const emailId = req.body.email
    const code = req.body.code

    const user = await UserSchema.find({email : emailId})
    let count = 0
    // console.log(user[0].tempCode)

   for (let i = 0; i < user[0].tempCode.length; i++) {
    if(user[0].tempCode[i] === code){
         count =1
         break
     }else{
         count = 0
     }
   } 


    if(count ==1 ){
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
}

const verifyBuyer = async (req,res) => {
    try{
    const emailId = req.body.email
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