import React from 'react';

import WordpressCollapse from './WordpressCollapse';
import ComponentsCollapse from './ComponentsCollapse';
import JavaScriptCollapse from './JavaScript';
import PHP from './PHP';
import Python from './Python';

const SideBar = () => (
  <div className="sidebar fixed-top h-100">
    <nav 
      className="navbar flex-column align-items-start navbar-light 
        h-100 pl-4 py-4 shadow-lg border-right"
      >
      <ul className="navbar-nav">
        <WordpressCollapse />
        <ComponentsCollapse />
        <JavaScriptCollapse />
        <PHP />
        <Python />
      </ul>
    </nav>
  </div>
);

export default SideBar;