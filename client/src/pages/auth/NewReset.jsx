import './NewReset.css'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ResetPassword } from '../../services/authService'

const initialState = {
    password:"",
    passwordCheck:""
}

const NewReset = () => {


    const navigate = useNavigate()
    const[formData , setFormData] = useState(initialState)
    const {password , passwordCheck} = formData
    const {resetToken} = useParams()
    const handleInputChange = (e)=>{
        const {name , value} = e.target
        setFormData({
        ...formData, [name]: value
        })
    }
    const reset = async(e)=>{
        e.preventDefault()
        if(!passwordCheck ||!password)
        return toast.error("All fields are required")

        if(password.length < 6)
        return toast.error("Password should be greater than 6 characters")

        if(password !== passwordCheck)
        return toast.error("Passwords should be the same")

        const userData = {
        password,
        passwordCheck,
        };
        try {
        const data = await ResetPassword(userData, resetToken);
        toast.success(data.message);
        navigate('/login')
        } catch (error) {
        console.log(error.message);
        }
    }

  return (
    <>
    <div class="background">
    </div>
    <form onSubmit={reset}>
        <h3>Reset Password</h3>

        <label for="password">New Password</label>
        <input type="password" placeholder="Password" id="password"  name="password" onChange={handleInputChange} value={password} required/>

        <label for="password">Confirm New Password</label>
        <input type="password" placeholder="Password" id="password" name="passwordCheck" onChange={handleInputChange} value={passwordCheck} required/>

        <button>Reset Password</button>
    </form>
    </>
  )
}

export default NewReset