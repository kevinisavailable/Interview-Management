const AsyncHandler = require('express-async-handler')


const contactUs = AsyncHandler(async(req,res)=>{
    res.send("Hello")
})

module.exports={
    contactUs
}