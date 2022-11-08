const router = require('express').Router()
const {createProduct} = require('../controllers/productController')
const protect = require('../middleware/authMiddleware')

router.post('/create' , protect , createProduct)


module.exports = router