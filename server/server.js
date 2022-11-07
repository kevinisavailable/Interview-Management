const express = require('express')
const  mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000


const app = express()
dotenv.config()

app.listen(PORT , (req ,res)=>{
    console.log(`Server started and is running on PORT ${PORT}`)
})