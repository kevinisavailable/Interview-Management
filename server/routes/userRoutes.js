const { registerUser, loginUser , logoutUser , getUser ,loginStatus , updateUser,updatePassword ,forgotPassword , resetPassword} = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

const router = require('express').Router()
router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/logout' , logoutUser)
router.get('/getuser' , protect ,getUser)
router.get('/loggedin' , loginStatus)
router.patch('/updateuser' ,protect, updateUser)
router.patch('/updatepassword' ,protect, updatePassword)
router.post('/forgotpassword' , forgotPassword)
router.put('/resetpassword/:resetToken', resetPassword)
module.exports = router