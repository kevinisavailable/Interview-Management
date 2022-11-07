const express = require('express')
const  mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Database Connection established")})
.catch((err)=>{console.log(err)})

app.listen(PORT , (req ,res)=>{
    console.log(`Server started and is running on PORT ${PORT}`)
})