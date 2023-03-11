require("dotenv").config();
const jwt = require("jsonwebtoken");
const multer = require("multer");

const UserSchema = require("../models/userSchema");
const EmployerSchema = require("../models/employerSchema");
const JobSchema = require("../models/companySchema");

const authToken = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await UserSchema.findById({ _id: decode._id });

    if (!user) {
      const employer = await EmployerSchema.findById({ _id: decode._id });
      if (!employer) {
        res.status(404).json({
          error: "Wrong credentials",
        });
      } else {
        req.user = employer;
        next();
      }
    } else {
      req.user = user;
      next();
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
    authToken
}