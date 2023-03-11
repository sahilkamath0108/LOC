const express = require("express")

const userC = require("../controllers/userC")
const auth = require("../middleware/auth")

const router = express.Router()

//create user
router.post("/new", userC.createUser)

//upload pfp
router.post("/uploadPfp", auth.authToken , userC.fileVerifyPfp.single('pfp'), userC.uploadPfp )

//login user
router.post("/login", userC.loginUser)

// Update interests
router.post("/updateInterests", auth.authToken, userC.updateInterests);

// View all coupons
router.get("/allCoupons", auth.authToken, userC.allCoupons);

// View coupons of interest
router.get("/interestCoupons", auth.authToken, userC.interestCoupons);

// Filtered Coupons
router.post("/allCoupons", auth.authToken, userC.filteredCoupons);

// Get a specific coupon
router.post("/getCoupon/:couponId", auth.authToken, userC.getCoupon);

// Use a specific coupon
router.put("/useCoupon/:couponId", auth.authToken, userC.useCoupon);

// Write a review
router.post("/writeReview/:couponId", auth.authToken, userC.writeReview);

module.exports = router;