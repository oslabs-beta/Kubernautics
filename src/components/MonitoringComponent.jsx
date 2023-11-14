import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const MonitoringComponent = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/prometheus');
      const rawData = await response.text();
      console.log(rawData);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div>
      <h1>Monitoring Component</h1>
    </div>
  );
};

export default MonitoringComponent;
