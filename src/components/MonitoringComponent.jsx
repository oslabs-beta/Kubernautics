import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // -> automatic module import based on the file

const MonitoringComponent = ({ query }) => {
  const [lineData, setLineData] = useState();
  const [options, setOptions] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/pull', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
      const result = await response.json();
      // console.log('Data from server:', result.data);
      let timestamps = [];
      let datalabels = [];
      for (let i = 0; i < result.data.result[0].values.length; i++) {
        timestamps.push(
          // The timestamps are provided in Unix time format -- the number of
          // Seconds that have elapsed since Jan 1st, 1970 (UTC) aka Unix epoch.
          new Date(result.data.result[0].values[i][0] * 1000).toLocaleString()
        );
        datalabels.push(result.data.result[0].values[i][1]);
      }

      const lineData = {
        labels: timestamps,
        datasets: [
          {
            label: result.data.result[0].metric.pod,
            data: datalabels,
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      };

      const options = {
        scales: {
          x: {
            type: 'category',
          },
          y: {
            title: {
              display: true,
              text: result.data.result[0].metric.__name__,
            },
            beginAtZero: true,
          },
        },
        animation: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        elements: {
          backgroundColor: 'rgba(50, 50, 200, 80)',
        },
      };
      setLineData(lineData);
      setOptions(options);
    } catch (err) {
      return console.error('Error fetching data', err);
    }
  };

  // Ensures data is fetched only after components are mount
  useEffect(() => {
    fetchData();
  }, []);

  // Conditional rendering of lineData and options
  // Line graph doesn't render until lineData and options both exist
  return (
    <div className='monitor'>
      <h2>Container CPU-Usage</h2>
      {lineData && options && <Line data={lineData} options={options} />}
    </div>
  );
};

export default MonitoringComponent;
