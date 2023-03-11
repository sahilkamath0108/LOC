const express = require("express")

const companyC = require("../controllers/companyC")
const auth = require("../middleware/auth")

const router = express.Router()

//create company

router.post("/new", companyC.createCompany)

//upload pfp

router.post("/uploadPfp", companyC.uploadPfp )

//login employee

router.post("/login", companyC.loginCompany)

module.exports = router