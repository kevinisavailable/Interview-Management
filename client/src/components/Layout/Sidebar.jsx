import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="#">
              <i className="bi bi-menu-button-wide"></i>
              <span>Components</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
