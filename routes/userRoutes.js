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

// View coupons
router.get("/allCoupons", auth.authToken, userC.allCoupons);

// Filtered Coupons
router.post("/allCoupons", auth.authToken, userC.filteredCoupons);

module.exports = router;