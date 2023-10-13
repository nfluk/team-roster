import React from 'react';
import './navbar.css';
import 'animate.css';
import SearchBox from './SearchBox';

function Navbar({ onSearchChange, organizationName }) {
  return (
    <div className="ma2">
      <h1 className="f1 dark-blue">{organizationName}</h1>
      <h2 className="animate__animated animate__backInLeft f3 ttu blue ">
        Meet the Team
      </h2>
      <SearchBox onSearchChange={onSearchChange} />
    </div>
  );
}

export default Navbar;
