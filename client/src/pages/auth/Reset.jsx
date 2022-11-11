import Card from '../../components/Card'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ResetPassword } from '../../services/authService'

const initialState = {
  password:"",
  passwordCheck:""
}

const Reset = () => {
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
    <div className='container justify-content-center align-items-center w-25 mt-5'>
    <Card>
    <main className="form-signin">
    <form onSubmit={reset}>
    
    <h1 className="h3 mb-3 fw-normal text-center">Reset Password</h1>

    <div className="form-floating my-2">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleInputChange} value={password} required/>
      <label >New Password</label>
    </div>
    <div className="form-floating my-2">
      <input type="password" className="form-control" id="floatingPassword1" placeholder="Password" name="passwordCheck" onChange={handleInputChange} value={passwordCheck} required/>
      <label >Confirm New Password</label>
    </div>
    <div className='text-center'>
    <button className="w-50 btn btn-md btn-primary text-center" type="submit">Reset Password</button>
    </div>
    <div className='d-flex mx-2 px-2 justify-content-around'>
    <Link to='/register' style={{textDecoration:"none"}}>
    <div className='mt-1 text-center text-danger'>
        <p> Register</p>
    </div>
    </Link>
    <Link to='/login' style={{textDecoration:"none"}}>
    <div className='mt-1 text-center'>
        <p>Login</p>
    </div>
    </Link>
    </div>
  </form>
</main>
    </Card>
    
    </div>
  )
}

export default Reset