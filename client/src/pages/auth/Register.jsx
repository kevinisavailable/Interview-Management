import Card from '../../components/Card'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='container justify-content-center align-items-center w-25 mt-5'>
    <Card>
    <main class="form-signin">
  <form>
    
    <h1 class="h3 mb-3 fw-normal text-center">Register</h1>

    <div class="form-floating my-2">
      <input type="text" class="form-control" id="floatingInput" placeholder="name" required/>
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating my-2">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating my-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating my-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
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