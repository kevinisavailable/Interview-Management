import React, { useEffect } from 'react'
import {GrAdd} from 'react-icons/gr'
import {BsFillEyeFill} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import Search from '../Search/Search'
import { useState } from 'react'
import { FILTER_PRODUCTS, selectFilteredProduct } from '../../redux/features/product/filterSlice'
import {useDispatch , useSelector} from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import toast from 'react-hot-toast'
import { deleteSingleProduct, getProducts } from '../../redux/features/product/productSlice'


const ProductList = ({products}) => {
    const [search , setSearch]= useState("")
    const filteredProducts = useSelector(selectFilteredProduct)
    const dispatch = useDispatch()
    
    
    const shortenText = (text,n)=>{
        if(text.length > n){
            const shortenedText = text.substring(0 ,n).concat("...")
            return shortenedText
        }
        return text
    }
    const deleteProductRedux = async(id)=>{
      await dispatch(deleteSingleProduct(id))
      await dispatch(getProducts())
    }
    const confirmDelete = (id)=>{
      confirmAlert({
        title: 'Delete Product?',
        message: 'Are you sure to delete this product?',
        buttons: [
          {
            label: 'Delete',
            onClick: () => deleteProductRedux(id)
          },
          {
            label: 'Cancel',
            onClick: () => toast.success("Product Not deleted")
          }
        ]
      });
    }

    useEffect(() => {
      dispatch(FILTER_PRODUCTS({
        products,search
      }))
    
      
    }, [search , products ,dispatch])


  return (
    <>
      <div className='d-flex flex-row justify-content-between'>
      <div className="pagetitle">
          <h1>Dashboard</h1>
        </div>
        <div>
        <Search value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      </div>
    
    <div>
        {products.length === 0 ? <p>No Product Found</p> :(

        
    <table class="table">
  <thead>
    <tr>
      <th scope="col">S/n</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Value</th>
      <th scope="col" className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        filteredProducts.map((product , index)=>{
            const{_id , name , category , price ,quantity} = product
            return(
                <>
                <tr>
                <th scope="row" key={_id}>{index + 1}</th>
                <td>{shortenText(name , 20)}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    Value
                </td>
                <td className='d-flex align-items-center justify-content-around'>
                    <span className='px-1'>
                    <AiOutlineDelete size={25} onClick={()=>confirmDelete(_id)} style={{cursor:"pointer"}}/>
                    </span>
                </td>
                </tr>
                </>
            )
        })
    }
  </tbody>
</table>
)}
    </div>
   
    </>
  )
}

export default ProductList