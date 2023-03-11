const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const reviewSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
    },
    fname: {
        type: String,
    },
    review : {
        type: String,
    },
    star: {
        type: Number
    },
}, {timestamps: true});



const ReviewSchema = mongoose.model("review", reviewSchema)
module.exports = ReviewSchema