import React from 'react';
import { NavLink } from 'react-router-dom';

function PythonCollapse() {
  return(
    <div className="mb-2">
      <a 
        class="text-dark" 
        data-toggle="collapse" 
        href="#openPython" 
        role="button" 
        aria-expanded="false" 
        aria-controls="openPython"
      >
        <strong>Python</strong>        
      </a>

      <div class="collapse pl-3" id="openPython">
        <li className="nav-item">
          <NavLink 
            className="nav-link"
            to='/wordpress/loop'
          >Loop de posts</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink 
            className="nav-link"
            to='/wordpress/custom-post-loop'
          >Custom post Loop</NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
            className="nav-link"
            to='/wordpress/custom-post'
          >Create Custom Post</NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
            className="nav-link"
            to='/wordpress/meta-box'
          >Add Meta Box</NavLink>
        </li>

      </div>


    </div>
  );
}

export default PythonCollapse;