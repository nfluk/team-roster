import React from 'react';
import './navbar.css';
import 'animate.css';

function Navbar() {
  const teamType = 'Division: sales';

  return (
    <div>
      <h1>Our Team</h1>
      <h3 className={'animate__animated animate__backInLeft'}>
        {teamType.toUpperCase()}
      </h3>
    </div>
  );
}

export default Navbar;
