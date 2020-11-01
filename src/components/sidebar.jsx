import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <nav className="navbar flex-column navbar-dark fixed-top bg-dark col-2 h-100 px-2 py-4">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link"
        exact to='/'
        >Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"
        exact to='/wordpress'
        >Wordpress</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"
        exact to='/components'
        >Componentes</NavLink>
      </li>
    </ul>

  </nav>
);

export default SideBar;