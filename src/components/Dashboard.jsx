import React, { useState, useEffect } from 'react';
import MonitoringComponent from './MonitoringComponent';
import { CustomChart } from './CustomChart';

// Initial chart rendered on Homepage load
const Dashboard = (props) => {
  const defaultCharts = [
    {
      query: 'container_cpu_usage_seconds_total',
      range: '20m',
      stepSize: 80,
    },
  ];
  // Verify or set a storage object with session key
  const [charts, setCharts] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('session'));
    if (storedData) {
      return storedData;
    } else {
      const newData = [...defaultCharts];
      localStorage.setItem('session', JSON.stringify(newData));
      return newData;
    }
  });
  // Update existing localStorage 
  const SaveDataToLocalStorage = (query, range, stepSize) => {
    const existingData = JSON.parse(localStorage.getItem('session')) || [];
    console.log('existingData', existingData);
    const newData = [
      ...existingData,
      { query: query, range: range, stepSize: stepSize },
    ];
    // Rewrite the localstorage
    localStorage.setItem('session', JSON.stringify(newData));
    setCharts(JSON.parse(localStorage.getItem('session')));
  };

  return (
    <div id='clickables'>
      <CustomChart onSaveToLocalStorage={SaveDataToLocalStorage} />

      <div id='dashboard'>
        {charts.map((chart, i) => {
          return (
            <MonitoringComponent
              key={`chart-${i}`}
              query={chart.query}
              range={chart.range}
              stepSize={chart.stepSize}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
