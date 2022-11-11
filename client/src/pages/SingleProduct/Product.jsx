import React from 'react'
import ProductDetails from '../../components/Productdetails/ProductDetails'
import useRedirectLogout from '../../customHook/useRedirectLogout'


const Product = () => {
  useRedirectLogout("/login")
  return (
        <ProductDetails />
  )
}

export default Product