import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const MonitoringComponent = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/pull', {
        method: 'POST',
      });
      const data = await response.json();
      console.log('Data from server:', data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  
  fetchData();
  
  // useEffect(() => {
  //   fetchData();
  // }, []); 

  return (
    <div>
      <h1>Monitoring Component</h1>
    </div>
  );
};

export default MonitoringComponent;
