import React from 'react';
import { Link } from 'react-router-dom';
import nautics from '../../assets/images/nautics';
const NavBar = (props) => {
  return (
    <nav className='navBar'>
      <ul>
        <li className='brand'>
          <img src={nautics} className='logo' /> Kubernautics
        </li>

        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/addMetric'>Add Metric</Link>
        </li>
        <li>
          <Link to='/clusterVisualizer'>Visualizer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
