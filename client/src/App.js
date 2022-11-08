import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import {Forgot , Login ,Register ,Reset} from './pages/auth/auth'
import Layout from './components/Layout/Layout';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/forgotpassword' element={<Forgot />}/>
      <Route path='/resetpassword/:resettoken' element={<Reset />}/>
      <Route path='/dashboard' element={<Layout/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
