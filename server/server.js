const express = require('express')
const  mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const { json } = require('body-parser')

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/' , (req,res)=>{res.send("Homepage") })

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Database Connection established")})
.catch((err)=>{console.log(err)})

app.listen(3000 , (req ,res)=>{
    console.log(`Server started and is running on PORT ${PORT}`)
})