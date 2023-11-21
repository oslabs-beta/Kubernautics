import React from 'react';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import { CustomChart } from './CustomChart';
import { ClusterVisualizer } from './ClusterVisualizer';

//effectively will be our home page
//client side rendering and navigation to maintain a SPA
//react will render the component w/o making a full page reload ==> smoother
//least server interactions should make it faster

//BrowserRouter serves as the wrapper
function App() {
  return (
    <BrowserRouter>
      <div id='application'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/addMetric' element={<CustomChart />} />
          <Route path='/clusterVisualizer' element={<ClusterVisualizer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
