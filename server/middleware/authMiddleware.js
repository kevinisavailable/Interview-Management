const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async(req,res , next)=>{
    try{
       const token = await req.cookies.token
       console.log(req.cookies)
       if(!token){
        res.status(401)
        throw new Error("Not Authorized , Please Login")
       }

       const verified = jwt.verify(token , process.env.JWT_SECRET)
       
       const user = await UserModel.findById(verified.id).select("-password")
       if(!user){
        res.status(401)
        throw new Error("User not Found")
       }

       req.user = user 
       next()
    }
    catch(error){
        res.status(401)
        throw new Error("User not Found")
    }
})

module.exports = protect