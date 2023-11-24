import React, { useState } from 'react';
import MonitoringComponent from './MonitoringComponent';

const Dashboard = (props) => {
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
