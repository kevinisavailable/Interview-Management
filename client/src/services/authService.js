import axios from 'axios'
import toast from 'react-hot-toast';

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const registerUser =async(userData)=>{
    try{
        const response = await axios.post(`${BACKEND_URL}/api/users/register`, userData)
        if(response.statusText === "OK"){
        toast.success("Registration Successfull")
        }
        return(response)
    }   
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        toast.error(message)
        
    }
}

export const validateEmail = (email) => { 
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}


export const LoginUser =async(userData)=>{
    try{
        const response = await axios.post(`${BACKEND_URL}/api/users/login`, userData)
        if(response.statusText === "OK"){
        toast.success("Login Successful")
        }
        // console.log(response)
        return(response)
    }   
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        toast.error(message)
        
    }
}


export const LogoutUser =async()=>{
    try{
        const response = await axios.get(`${BACKEND_URL}/api/users/logout`)
        toast.success("Logout Successful")
    }   
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        toast.error(message)
        
    }
}


export const ForgotPassword =async(userData)=>{
    try{
        const response = await axios.post(`${BACKEND_URL}/api/users/forgotpassword`, userData)
        if(response.statusText === "OK"){
        toast.success(response.data.message)
        }
        console.log(response)
        return(response)
    }   
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        toast.error(message)
        
    }
}