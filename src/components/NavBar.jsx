import React from 'react';
import { Link } from 'react-router-dom';
import nautics from '../../assets/images/nautics';

// Navigation Bar at the top of our Homepage
const NavBar = () => {
  return (
    <header className='navBar'>
      <div className='brand'>
        <img src={nautics} className='logo' />
        <h1>Kubernautics</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/clusterVisualizer'>Visualizer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
