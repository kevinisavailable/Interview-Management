const AsyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const { fileSizeFormatter } = require('../utils/fileUpload')

const createProduct = AsyncHandler(async(req,res)=>{
    const {name, sku, category , quantity , price , description}  = req.body  
    if(!name || !category || !quantity || !price || !description){
        res.status(400)
        throw new Error("Please fill in all Fields")
    }

    let fileData = {}
    if(req.file){
        fileData = {
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize : fileSizeFormatter(req.file.size , 2)
        }
    }
    
    const product  = await Product.create({
        user: req.user.id,
        name: name,
        sku: sku,
        category: category,
        price :price,
        quantity:quantity,
        description:description,
        image : fileData
    })
    res.status(201).json({
        product
    })
})

module.exports ={
    createProduct
}