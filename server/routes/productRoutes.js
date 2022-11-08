const router = require('express').Router()
const {createProduct , getAllProducts} = require('../controllers/productController')
const protect = require('../middleware/authMiddleware')
const { upload } = require('../utils/fileUpload')


router.post('/create' , protect, upload.single("image"), createProduct)
router.get('/allproducts' ,protect ,  getAllProducts)


module.exports = router