import React from 'react'
import {GrAdd} from 'react-icons/gr'
import {BsFillEyeFill} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
const ProductList = ({products}) => {

    const shortenText = (text,n)=>{
        if(text.lenth > n){
            const shortenedText = text.substring(0 ,n).concat("...")
            return shortenedText
        }
        return text
    }

  return (
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
        products.map((product , index)=>{
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
                    <GrAdd  size={25}/>
                    </span>
                    <span className='px-1'>
                    <BsFillEyeFill size={25}/>
                    </span>
                    <span className='px-1'>
                    <AiOutlineDelete size={25}/>
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
  )
}

export default ProductList