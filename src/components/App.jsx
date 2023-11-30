import React from 'react';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import { BrowserRouter, Router, Route, Link, Routes } from 'react-router-dom';
import { CustomChart } from './CustomChart';
import { ClusterVisualizer } from './ClusterVisualizer';

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
