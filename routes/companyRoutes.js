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

//get coupons as users
router.get("/allCoupons", auth.authToken, companyC.allCoupons)

//get profile
router.get("/allCoupons", auth.authToken, companyC.viewProfile)

//edit profile
router.get("/editProfile", auth.authToken, companyC.updateCompany)

//post a static coupon
router.get("/postStatic", auth.authToken, companyC.postStatic)

module.exports = router