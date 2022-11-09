import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import {Forgot , Login ,Register ,Reset} from './pages/auth/auth'
import Layout from './components/Layout/Layout';
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLoginStatus } from './services/authService';
import { SET_LOGIN } from './redux/features/auth/authSlice';
axios.defaults.withCredentials = true

function App() {
const dispatch = useDispatch()
useEffect(() => {
  async function loginStatus(){
    const status = await getLoginStatus()
    dispatch(SET_LOGIN(status))
  }
  loginStatus()
}, [dispatch])
  


  return (
    <BrowserRouter>
    <Toaster
      position="top-right"
      reverseOrder={false}
/>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/forgotpassword' element={<Forgot />}/>
      <Route path='/resetpassword/:resetToken' element={<Reset />}/>
      <Route path='/dashboard' element={<Layout/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
