const express = require("express")

const userC = require("../controllers/userC")
const auth = require("../middleware/auth")

const router = express.Router()

//create company

router.post("/new", userC.createUser)

//upload pfp

router.post("/uploadPfp", auth.authToken , userC.fileVerifyPfp.single('pfp'), userC.uploadPfp )

//login coompany

router.post("/login", userC.loginUser)