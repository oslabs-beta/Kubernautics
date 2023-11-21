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
      // console.log('Data from server:', result.data);
      let timestamps = [];
      let datalabels = [];
      for (let i = 0; i < result.data.result[0].values.length; i++) {
        timestamps.push(
          // the timestamps are provided in Unix time format -- the number of 
          // seconds that have elapsed since Jan 1st, 1970 (UTC) aka Unix epoch.
          // These seconds need to be converted to milliseconds before being 
          // passed into a Date object.
          //
          // toLocaleString obtains string representation of date and time in local
          // timezone.
          new Date(result.data.result[0].values[i][0] * 1000).toLocaleString());
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

  //ensures data is fetched only after components are mount
  useEffect(() => {
    fetchData();
  }, []);

  //conditional rendering of lineData and options
  //Line graph doesn't render until lineData and options both exist
  //delayed rendering
  return (
    <div class='monitor'>
      <h2>Container CPU-Usage</h2>
      {lineData && options && <Line data={lineData} options={options} />}
    </div>
  );
};

// const ChartOne = ({ chartData }) => {

//   const [chartOneState, setChartOneState] = UseState({

//   })
//   data={chartData}
//   //create code to pull out CPU usage

//   return (
//     <div className="pie-chart">
//       <Pie

//         // data={chartData}

//         options={{
//           plugins: {
//             refresh: 300
//             title: {
//               display: true,
//               text: "Users Gained between 2016-2020"
//             }
//           }
//         }}
//       />
//     </div>
//   );
// }

export default MonitoringComponent;
