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
    code : {
        type : String,
    },
    category: {
        type: String
    },
    discount: {
        type: Number,
        min: 0,
        max: 100
    },
    iterations : {
        type: Number,
        default : 0,
    },
    limit : {
        type: Number,
        required : true,
    },
    limitReached: {
        type: Boolean,
        default: false
    },
    usedBy : [{
        type: mongoose.Types.ObjectId,
        ref : "user"
    }],
    expiryDate : {
        type: String
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref : "review"
    }]
}, {timestamps: true});



const StaticCouponSchema = mongoose.model("staticCoupon", staticCouponSchema)
module.exports = StaticCouponSchema