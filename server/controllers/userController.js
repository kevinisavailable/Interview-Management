const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const jwt =  require('jsonwebtoken')



const generateToken = (id) => { 
    return jwt.sign({id} , process.env.JWT_SECRET , {expiresIn : "1d"})
 }

const registerUser = asyncHandler( async(req,res)=>{
    const {name , email  ,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    if(password.length < 6 ){
        res.status(400)
        throw new Error("Please enter a more secure password")
    }

    const userExists = await UserModel.findOne({email})

    if(userExists){ 
        throw new Error("Email has already been used.")
    }


    const user = await UserModel.create({
        name:name ,
        email: email ,
        password: password,
    })

    const token = generateToken(user._id)

    res.cookie("token", token , {
        path:"/",
        httpOnly: true,
        expires:new Date(Date.now() + 1000* 86400),
        sameSite:"none",
        secure:true
    })

    if(user){
        // const {id , name ,email , CV , bio } = user
        res.status(200).json({
            _id : user.id,
            name: user.name,
            email:user.email,
            cv: user.cv,
            phoneNo:user.phoneNo,
            description: user.description,
            token:token
        })
        
    }
    else{
        res.status(400)
        throw new Error("User not created")
    }
})

module.exports = {
    registerUser
}