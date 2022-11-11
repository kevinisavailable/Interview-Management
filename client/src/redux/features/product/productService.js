import axios from 'axios'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = `${BACKEND_URL}/api/products`


export const createProduct = async(formData)=>{
   const response = await axios.post(`${API_URL}/create` , formData)
   return response.data
}

export const getProductsUser = async(formData)=>{
   const response = await axios.get(`${API_URL}/allproducts`)
   return response.data
}

export const deleteProduct = async(id)=>{
   const response  = await axios.delete(`${API_URL}/deleteproduct/${id}`)
   return response.data
}

export const getAProduct = async(id)=>{
   const response  = await axios.get(`${API_URL}/product/${id}`)
   return response.data
}