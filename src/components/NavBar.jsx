import React from 'react';

const NavBar = (props) => {
  return (
    <header className='navBar'>
      <h1>Kubernautics</h1>
      <nav>
        <li><a href='#'>Cluster Map</a></li>
        <li><a href='#'>Dashboard</a></li>
      </nav>
    </header>
  );
};

export default NavBar;
