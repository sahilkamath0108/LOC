const express = require("express")
require("./db.js")
require('dotenv').config()

const fileUpload = require("express-fileupload")

const companyRoutes = require("./routes/companyRoutes")
const userRoutes = require("./routes/userRoutes")
const externalRoutes = require("./routes/verificationAPI.js")

const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json());




app.use(fileUpload({
  useTempFiles : true
}))

app.use(express.json())

// user 
app.use('/user',userRoutes)

// company
app.use('/company',companyRoutes)

// external test API
app.use("/verify", externalRoutes)


app.listen(process.env.PORT || 3001, ()=>{
  console.log('The server is up and running at port 3001')
})


