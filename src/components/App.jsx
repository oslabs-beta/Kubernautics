import React from 'react';
import NavBar from './NavBar';
import Dashboard from './Dashboard';

//effectively will be our home page

function App() {
  return (
    <div id='application'>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
