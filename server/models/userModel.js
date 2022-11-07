const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name :{
        type:String ,
        required: [true , "Name is required"],
    },
    email:{
        type:String , 
        required:[true , "Email is required"],
        unique : true,
        trim: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password:{
        type:String , 
        required:[true, "Please add a password"],
        minLenght: [6 , "Enter a password with more than 6 characters"],
    },
    cv :{
        type:String , 
        required:[true, "Please add a CV"],
        default:"No CV attached"
    },
    phoneNo:{
        type:String , 
        default : "+91"
    },
    description:{
        type:String,
        default: "Reason not defined",
        maxLength:[250 , "Please limit your reason to 250 characters"]
    }
    }
,{
    timestamps : true
})

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        return next()
    }
    const salt =  await bcrypt.genSalt(10)
    const hashedPassword =  await bcrypt.hash(this.password , salt)
    this.password = hashedPassword
    next()

})

const UserModel = mongoose.model("UserModel" , userSchema)

module.exports = UserModel