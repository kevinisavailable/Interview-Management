const AsyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

const createProduct = AsyncHandler(async(req,res)=>{
    const {name, sku, category , quantity , price , description}  = req.body  
    if(!name || !category || !quantity || !price || !description){
        res.status(400)
        throw new Error("Please fill in all Fields")
    }

    const product  = await Product.create({
        user: req.user.id,
        name: name,
        sku: sku,
        category: category,
        price :price,
        quantity:quantity,
        description:description,
    })
    res.status(201).json({
        product
    })
})

module.exports ={
    createProduct
}