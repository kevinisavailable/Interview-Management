import {Link , useNavigate} from 'react-router-dom'
import { selectName, SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice';
import { LogoutUser } from '../../services/authService';
import {useDispatch , useSelector} from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = useSelector(selectName)
  const logout = async()=>{
    await LogoutUser
    await dispatch(SET_LOGIN(false))
    navigate('/login')
  }

  return (
    <>
  <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <Link to='/'>
      <a className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span className="d-none d-lg-block">Interview </span>
      </a>
      </Link>
      
      {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
    </div>

    {/* <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div> */}

      <a className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">Welcome, {name} </span>
      </a>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        {/* <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search"></i>
          </a>
        </li> */}
        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-person"></i>
                <Link to='/profile'>
                <span>My Profile</span>
                </Link>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <button className="dropdown-item d-flex align-items-center" onClick={logout}>
                <i className="bi bi-box-arrow-right"></i>
                <span>Log Out</span>
              </button>
            </li>

          </ul>
        </li>

      </ul>
    </nav>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  </header>
    </>
  );
};

export default Header;
