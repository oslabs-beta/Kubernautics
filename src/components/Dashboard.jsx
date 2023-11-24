import React, { useState } from 'react';
import MonitoringComponent from './MonitoringComponent';

const Dashboard = (props) => {
  // Whatever charts (if any) we want up by default can go here. If we decide ultimately
  // to present the user a blank slate dashboard to work from, this can be deleted.
  const defaultCharts = [
    { query: 'container_cpu_usage_seconds_total{namespace="kubernautics-dev"}[20m]' },
    { query: 'container_cpu_usage_seconds_total{namespace="kubernautics-dev"}[20m]' },
    { query: 'container_cpu_usage_seconds_total{namespace="kubernautics-dev"}[20m]' },
    { query: 'container_cpu_usage_seconds_total{namespace="kubernautics-dev"}[20m]' },  
  ]
  const [charts, setCharts] = useState(defaultCharts);

  return (
    <div id='dashboard'>
      {charts.map((chart, i) => {
        return (<MonitoringComponent
          key={`chart-${i}`}
          query={chart.query}
        />);
      })}
    </div>
  );
};

export default Dashboard;
