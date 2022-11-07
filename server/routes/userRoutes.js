const { registerUser, loginUser , logoutUser } = require('../controllers/userController')

const router = require('express').Router()
router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/logout' , logoutUser)
module.exports = router