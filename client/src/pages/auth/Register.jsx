import Card from '../../components/Card'
import {Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { validateEmail } from '../../services/authService'
import {registerUser} from '../../services/authService'
import {useDispatch} from 'react-redux'
import { SET_LOGIN , SET_NAME } from '../../redux/features/auth/authSlice'
const initialState = {
  name:"",
  email:"",
  password:"",
  passwordCheck:""
}




const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const[isLoading , setIsLoading] = useState(false)
  const[formData , setFormData] = useState(initialState)
  const {name , email , password , passwordCheck} = formData
  const handleInputChange = (e)=>{
    const {name , value} = e.target
    setFormData({
      ...formData, [name]: value
    })
  }

  const register = async(e)=>{
    e.preventDefault()
    if(!name || !email ||!password)
    return toast.error("All fields are required")
    if(password.length < 6)
    return toast.error("Password must be grater than 6 characters")
    if(password !== passwordCheck)
    return toast.error("Password don't match")
    if(!validateEmail(email)){
      return toast.error("Please enter a valid email")
    }

    const userData = {
      name , email , password
    }
    setIsLoading(true)
    try{
      const data = await registerUser(userData)
      // console.log(data)
      await dispatch(SET_LOGIN(true))
      await dispatch(SET_NAME(data.name))
      navigate('/dashboard')
      setIsLoading(false)
    }
    catch(error){
      setIsLoading(false)
      console.log(error.message)
    }
  }
  return (
    <div className='container justify-content-center align-items-center w-25 mt-5'>
    <Card>
    <main class="form-signin">
  <form onSubmit={register}>
    
    <h1 class="h3 mb-3 fw-normal text-center">Register</h1>

    <div class="form-floating my-2">
      <input type="text" class="form-control" id="floatingInput" placeholder="name" name="name" onChange={handleInputChange} value={name} required/>
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating my-2">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleInputChange} value={email} required/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating my-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleInputChange} value={password} required/>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating my-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="passwordCheck" onChange={handleInputChange} value={passwordCheck} required/>
      <label for="floatingPassword">Confirm Password</label>
    </div>
    <div className='text-center'>
    <button class="w-50 btn btn-md btn-primary text-center" type="submit">Sign Up</button>
    </div>
    <div className=' mx-2 px-2 '>
    <div className='text-center'>
      <p>Already have an account?</p>
    <Link to='/login' style={{textDecoration:"none"}}>
        <p>Login</p>
        </Link>
    </div>
    
    </div>
  </form>
</main>
    </Card>
    
    </div>
    
  )
}

export default Register