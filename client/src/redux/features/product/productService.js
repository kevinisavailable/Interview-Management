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