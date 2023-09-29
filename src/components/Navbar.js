import React from 'react';
import './navbar.css';
import 'animate.css';
import SearchBox from './SearchBox';

function Navbar({ onSearchChange }) {
  return (
    <div className="ma2">
      <h1 className="f1 dark-blue">Our Team</h1>
      <h2 className="animate__animated animate__backInLeft f5 ttu blue ">
        Division: Sales
      </h2>
      <SearchBox onSearchChange={onSearchChange} />
    </div>
  );
}

export default Navbar;
