const express = require('express')
const app = express()
const  mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const errorHandler = require('./middleware/errorMiddleware')
const cookieParser = require('cookie-parser')
dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api/users' , userRoutes)
app.use('/api/products' , productRoutes)


app.get('/' , (req,res)=>{res.send("Homepage") })

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Database Connection established")})
.catch((err)=>{console.log(err)})

app.use(errorHandler)

app.listen(3000 , (req ,res)=>{
    console.log(`Server started and is running on PORT ${PORT}`)
})