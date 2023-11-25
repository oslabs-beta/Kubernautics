import React, { useState, useEffect } from 'react';
import MonitoringComponent from './MonitoringComponent';
import { CustomChart } from './CustomChart';
const Dashboard = (props) => {
  // Whatever charts (if any) we want up by default can go here. If we decide ultimately
  // to present the user a blank slate dashboard to work from, this can be deleted.

  //Haven't added but might want a way to delete charts from the dashboard. as simple as locating
  //and deleting the query line from localStorage
  const defaultCharts = [
    {
      query: 'container_cpu_usage_seconds_total{namespace="kubernautics-dev"}',
      range: '20m',
    },
  ];
  const [charts, setCharts] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('session'));
    if (storedData) {
      // If there is data in localStorage, return it
      return storedData;
    } else {
      // If no data in localStorage, create a new session and return it
      const newData = [...defaultCharts];
      localStorage.setItem('session', JSON.stringify(newData));
      return newData;
    }
  });

  const SaveDataToLocalStorage = (query, range) => {
    //Get the existing Data from localStorage
    const existingData = JSON.parse(localStorage.getItem('session')) || [];
    //Update the existing storage with the data passed through
    console.log('existingData', existingData);
    const newData = [...existingData, { query: query, range: range }];
    //Rewrite the localstorage
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
