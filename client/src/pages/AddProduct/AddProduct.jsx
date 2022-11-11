import React from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductForm from '../../components/ProductForm/ProductForm'
import {useDispatch, useSelector} from 'react-redux'
import { createNewProduct, selectIsLoading } from '../../redux/features/product/productSlice'
import { Navigate, useNavigate } from 'react-router-dom'


const initialState = {
    name:"",
    category:"",
    quantity:"",
    price:""
}

const AddProduct = () => {
    const[product , setProduct] = useState(initialState)
    const[productImage, setProductImage] = useState("")
    const[imagePreview, setImagePreview] = useState(null)
    const[description, setDescription] = useState("")
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {name , category ,price ,quantity} = product

    const handleInputChange = (e)=>{
        const {name , value} = e.target
        setProduct({
          ...product, [name]: value
        })
      }

    const handleImageChange = (e) => { 
        setProductImage(e.target.files[0])
        console.log(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
     }

    const generateUID = (category)=>{
        const letter = category.slice(0,3).toUpperCase()
        const number = Date.now()
        const UID = letter + "-" + number
        return UID
    }   


    const saveProduct = async(e)=>{
      e.preventDefault()
        const formData = new FormData()
            formData.append("name" , name)
            formData.append("sku" , generateUID(category))
            formData.append("category" , category)
            formData.append("quantity" , quantity)
            formData.append("price" , price)
            formData.append("description" , description)
            formData.append("image" , productImage)
        console.log(...formData)

        await dispatch(createNewProduct(formData))
        navigate('/dashboard')
    }
  return (
    <div>
    <Layout>
        <p>This is add product page</p>
        <ProductForm
        product = {product}
        productImage = {productImage}
        imagePreview = {imagePreview}
        description = {description}
        setDescription = {setDescription}
        handleInputChange = {handleInputChange}
        handleImageChange = {handleImageChange}
        saveProduct = {saveProduct}
        />
    </Layout>
    </div>
  )
}

export default AddProduct