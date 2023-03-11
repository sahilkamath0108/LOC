const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const companySchema = new Schema({
    companyName: {
        type: String
    },
    profilePic: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid!");
            }
        }
    },
    role: {
        type: String,
        default: "company"
    },
    category: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    OTP: {
        type: Number,
    },
    staticCoupon: [{
        type : mongoose.Types.ObjectId,
        ref: 'employer'
    }],
    followers : [{
        type : mongoose.Types.ObjectId,
        ref : 'user'
    }]
}, {timestamps: true});


//hash the password
companySchema.pre("save", async function(next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    }catch(e){
        console.log(e)
    }
})


companySchema.methods.genAuthToken = async function(){
    const company = this

    const accessToken = jwt.sign({ _id: company._id.toString() } , process.env.ACCESS_TOKEN_SECRET)

    return accessToken
}

const UserSchema = mongoose.model("company", companySchema)
module.exports = UserSchema