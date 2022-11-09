import Card from '../../components/Card'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ForgotPassword, validateEmail } from '../../services/authService'

const Forgot = () => {
  const [email, setEmail] = useState("")

  const forgot = async(e)=>{
    e.preventDefault()
    if(!email){
      toast.error("Please add an email")
   }
   if(!validateEmail){
      toast.error("Please enter a valid email")
   }
  try{
      const userData = {
        email
      }
      await ForgotPassword(userData)
      setEmail("")
    }
  catch(err){
    console.log(err)
  }
    

  }

  return (
    <div className='container justify-content-center align-items-center w-25 mt-5'>
    <Card>
    <main>
    <form onSubmit={forgot}>
    
    <h1 className="h3 mb-3 fw-normal text-center">Forgot Password</h1>

    <div className="form-floating my-2">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} />
      <label >Email address</label>
    </div>
    <div className='text-center'>
    <button className="w-50 btn btn-md btn-primary text-center" type="submit">Get Reset Link</button>
    </div>
    <div className='d-flex mx-2 px-2 justify-content-around'>
    <Link to='/' style={{textDecoration:"none"}}>
    <div className='mt-1 text-center text-danger'>
        <p> Home</p>
    </div>
    </Link>
    <Link to='/register' style={{textDecoration:"none"}}>
    <div className='mt-1 text-center'>
        <p>Register</p>
    </div>
    </Link>
    </div>
  </form>
</main>
    </Card>
    
    </div>
  )
}

export default Forgot