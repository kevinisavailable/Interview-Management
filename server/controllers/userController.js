const registerUser =(req,res)=>{
    if(!req.body.email){
        res.status(400)
        throw new Error("Please add an Email.")
    }
}

module.exports = {
    registerUser
}