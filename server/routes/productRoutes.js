const router = require('express').Router()
const {createProduct , getAllProducts,getSingleProduct} = require('../controllers/productController')
const protect = require('../middleware/authMiddleware')
const { upload } = require('../utils/fileUpload')


router.post('/create' , protect, upload.single("image"), createProduct)
router.get('/allproducts' ,protect ,  getAllProducts)
router.get('/product/:id' ,protect ,  getSingleProduct)



module.exports = router