const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const staticCouponSchema = new Schema({
    companyName: {
        type : String,
    },
    product : {
        type: String,
        required : true
    },
    detail: {
        type: String
    },
    link : {
        type : String
    },
    codes : {
        user: mongoose.Types.ObjectId,
        code: String
    },
    category: {
        type: String
    },
    people_limit: {
        type: Number,
        required: true
    },
    discount_limit: {
        type: Number,
        min: 0,
        max: 100
    },
    expiryDate : {
        type: String
    },
    review: {
        type: mongoose.Types.ObjectId,
        ref : "review"
    }
}, {timestamps: true});


const DynamicCouponSchema = mongoose.model("dynamicCoupon", dynamicCouponSchema)
module.exports = DynamicCouponSchema