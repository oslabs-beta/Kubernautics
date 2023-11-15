import React, { useState, useEffect } from 'react';

const MonitoringComponent = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/pull', {
        method: 'POST',
      });
      const data = await response.json();
      console.log('Data from server:', data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  
  fetchData();

  return (
    <div>
      <h1>Monitoring Component</h1>
    </div>
  );
};

export default MonitoringComponent;
