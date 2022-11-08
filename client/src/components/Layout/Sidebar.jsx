
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to='/dashboard'>
            <a className='nav-link'>
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/add-product'>
            <a className='nav-link collapsed'>
            <i class="bi bi-plus-circle"></i>
              <span>Add Product</span>
            </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to='contact-us'>
            <a className='nav-link collapsed'>
            <i class="bi bi-bug-fill"></i>
              <span>Report Bug</span>
            </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to='view-candidates'>
            <a className='nav-link collapsed'>
            <i class="bi bi-people-fill"></i>
              <span>View Candidates</span>
            </a>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
