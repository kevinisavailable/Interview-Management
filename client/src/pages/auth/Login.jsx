import Card from '../../components/Card'
import {Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { LoginUser, validateEmail } from '../../services/authService'
import toast from 'react-hot-toast';
import {useDispatch} from 'react-redux'
import { SET_LOGIN, SET_NAME} from '../../redux/features/auth/authSlice';

const initialState = {
  email:"",
  password:"",
}

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const[formData , setFormData] = useState(initialState)
  const[isLoading , setIsLoading] = useState(false)
  const {email , password} = formData
  
  const handleInputChange = (e)=>{
    const {name , value} = e.target
    setFormData({
      ...formData, [name]: value
    })

  }

  const login = async(e)=>{
    e.preventDefault()
    if(!email ||!password)
    return toast.error("All fields are required")
    if(!validateEmail(email)){
      return toast.error("Please enter a valid email")
    }
    const userData = {
       email , password
    }
    setIsLoading(true)
    try{
      const data = await LoginUser(userData)
      setIsLoading(false)
      await dispatch(SET_LOGIN(true))
      console.log()
      await dispatch(SET_NAME(data.data.name))
      navigate('/dashboard')
    }
    catch(error){
      setIsLoading(false)
      console.log(error.message)
    }
  }

  return (
    <div className='container justify-content-center align-items-center w-25 mt-5'>
    <Card>
    <main className="form-signin">
  <form onSubmit={login}>
    
    <h1 className="h3 mb-3 fw-normal text-center">Login</h1>

    <div className="form-floating my-2">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleInputChange} value={email}  required/>
      <label >Email address</label>
    </div>
    <div className="form-floating my-2">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleInputChange} value={password}  required/>
      <label >Password</label>
    </div>
    <div className='text-center'>
    <button className="w-50 btn btn-md btn-primary text-center" type="submit">Log in</button>
    </div>
    <div className='d-flex mx-2 px-2 justify-content-around'>
    <Link to='/forgotpassword' style={{textDecoration:"none"}}>
    <div className='mt-1 text-center text-danger'>
        <p> Forgot password</p>
    </div>
    </Link>
    <Link to='/register' style={{textDecoration:"none"}}>
    <div className='mt-1 text-center'>
        <p> Create an Account</p>
    </div>
    </Link>
    </div>
  </form>
</main>
    </Card>
    
    </div>
    
  )
}

export default Login