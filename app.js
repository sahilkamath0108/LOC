const express = require("express")
require("./db.js")
require('dotenv').config()

const userRoutes = require("./routes/companyRoutes.js")
const companyRoutes = require("./routes/userRoutes.js")

const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json());



app.use(express.json())

// user 
app.use('/user',employeeRoutes)

// company
app.use('/employer',employerRoutes)


app.listen(process.env.PORT || 3000, ()=>{
  console.log('The server is up and running at port 3000')
})


