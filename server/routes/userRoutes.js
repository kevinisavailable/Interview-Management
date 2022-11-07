const { registerUser, loginUser , logoutUser , getUser } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

const router = require('express').Router()
router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/logout' , logoutUser)
router.get('/getuser' , protect ,getUser)
module.exports = router