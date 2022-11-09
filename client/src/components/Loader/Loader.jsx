import React from 'react'
import LoaderImg from './Spinner.gif'
import './Loader.css'
import  ReactDOM  from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal (
    <div class="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </div> , 
    document.getElementById("loader")
  )
}

export const SpinnerImg = ()=>{
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <img src={LoaderImg} alt="Loading" />
        </div>
    )
}

export default Loader