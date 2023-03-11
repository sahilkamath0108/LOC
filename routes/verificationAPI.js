const express = require("express")

const userC = require("../controllers/userC")
const auth = require("../middleware/auth")
const companyC = require("../controllers/companyC")
const externalC = require("../controllers/externalCompanyC")

const router = express.Router()

//check if valid

router.post("/", externalC.verify )

//delete the code

router.post("/bought" , externalC.verifyBuyer)

module.exports = router