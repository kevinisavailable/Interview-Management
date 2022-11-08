const mongoose  = require('mongoose')

const productSchema  =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true , "Please add a name"],
        trim:true
    },
    sku:{
        type:String,
        required:true,
        default:"SKU",
        trim:true
    },
    category:{
        required:[true,"Please add a category"],
        type:String,
    },
    quantity:{
        required:[true , "Please add a quantity"],
        type:String
    },
    price:{
        required:[true , "Please add a price"],
        type:String,
        trim:true
    },
    description:{
        required:[true , "Please add a description"],
        trim:true,
        type:String
    }
},{
    timestamps:true
})


const Product = mongoose.model("Product" , productSchema)

module.exports = Product