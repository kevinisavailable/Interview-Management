const router = require('express').Router()
const {createProduct , getAllProducts,getSingleProduct , deleteProduct ,updateProduct} = require('../controllers/productController')
const protect = require('../middleware/authMiddleware')
const { upload } = require('../utils/fileUpload')


router.post('/create' , protect, upload.single("image"), createProduct)
router.get('/allproducts' ,protect ,  getAllProducts)
router.get('/product/:id' ,protect ,  getSingleProduct)
router.delete('/deleteproduct/:id' , protect , deleteProduct)
router.patch('/updateproduct/:id' , protect , updateProduct)

module.exports = router