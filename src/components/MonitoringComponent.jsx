import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // -> automatic module import based on the file

const MonitoringComponent = () => {
  const [lineData, setLineData] = useState();
  const [options, setOptions] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/pull', {
        method: 'POST',
      });
      const result = await response.json();
      console.log('Data from server:', result);
      console.log(typeof result.data.result[0].metric.pod);
      console.log(result.data.result[0].metric.pod);
      let timestamps = [];
      let datalabels = [];
      for (let i = 0; i < result.data.result[0].values.length; i++) {
        timestamps.push(
          new Date(result.data.result[0].values[i][0] * 1000).toLocaleString()
          //the timestamps originally appear in Unix time format, seconds that have passed since Jan 1st, 1970 (UTC) aka Unix epoch
          //Multiply seconds into miliseconds
          //toLocaleString obtains string representation of date and time in local timezone
        );
        datalabels.push(result.data.result[0].values[i][1]);
      }

      // console.log(timestamps);
      // console.log(datalabels);

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
      };
      setLineData(lineData);
      setOptions(options);
    } catch (err) {
      return console.error('Error fetching data', err);
    }
  };

  //ensures data is fetched only after components are mount
  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering of lineData and options
  //Line graph doesn't render until lineData and options both exist
  //delayed rendering
  return (
    <div>
      <h1>Monitoring Component</h1>
      {lineData && options && <Line data={lineData} options={options} />}
    </div>
  );
};

export default MonitoringComponent;
