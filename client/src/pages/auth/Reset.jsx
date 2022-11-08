import Card from '../../components/Card'
import {Link} from 'react-router-dom'


const Reset = () => {
  return (
    <div className='container justify-content-center align-items-center w-25 mt-5'>
    <Card>
    <main class="form-signin">
  <form>
    
    <h1 class="h3 mb-3 fw-normal text-center">Reset Password</h1>

    <div class="form-floating my-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
      <label for="floatingPassword">New Password</label>
    </div>
    <div class="form-floating my-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
      <label for="floatingPassword">Confirm New Password</label>
    </div>
    <div className='text-center'>
    <button class="w-50 btn btn-md btn-primary text-center" type="submit">Reset Password</button>
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