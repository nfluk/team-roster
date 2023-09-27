import React from 'react';
import './navbar.css';
import 'animate.css';
import SearchBox from './SearchBox';

function Navbar() {
  const teamType = 'Division: sales';

  return (
    <div className="ma2">
      <h1 className="f1">Our Team</h1>
      <h2 className="animate__animated animate__backInLeft f5 ttu">
        {teamType}
      </h2>
      <SearchBox />
    </div>
  );
}

export default Navbar;
