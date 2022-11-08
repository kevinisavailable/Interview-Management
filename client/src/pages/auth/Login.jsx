import Card from '../../components/Card'
import {Link} from 'react-router-dom'

const login = () => {
  return (
    <div className='container justify-content-center align-items-center w-25 mt-5'>
    <Card>
    <main class="form-signin">
  <form>
    
    <h1 class="h3 mb-3 fw-normal text-center">Login</h1>

    <div class="form-floating my-2">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating my-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
      <label for="floatingPassword">Password</label>
    </div>
    <div className='text-center'>
    <button class="w-50 btn btn-md btn-primary text-center" type="submit">Sign in</button>
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

export default login