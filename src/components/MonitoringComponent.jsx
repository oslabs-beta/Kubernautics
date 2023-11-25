import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // -> automatic module import based on the file

const MonitoringComponent = ({ query, range }) => {
  const [lineData, setLineData] = useState();
  const [options, setOptions] = useState();
  const [title, setTitle] = useState();

  const fetchData = async () => {
    try {
      const rangeStmt = `[${range}]` || '';
      const response = await fetch('/api/pull', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `${query}${rangeStmt}`
        })
      });
      const result = await response.json();
      // console.log('Data from server:', result.data);
      
      setTitle(result.data.result[0].metric.__name__.replaceAll('_', ' '));
      const datasets = result.data.result.reduce((res, dataset) => {
        res.push({
          label: dataset.metric.pod,
          borderColor: 'rgba(75,192,192,1)',
          data: dataset.values.map(val => {
            return [
              // the timestamps are provided in Unix time format -- the number of 
              // seconds that have elapsed since Jan 1st, 1970 (UTC) aka Unix epoch.
              // These seconds need to be converted to milliseconds before being 
              // passed into a Date object.
              //
              // toLocaleString obtains string representation of date and time in local
              // timezone.
              new Date(val[0] * 1000).toLocaleString(),
              val[1],
            ];
          }),
        });
        return res;
      }, []);
      // console.log(datasets);
      let timestamps = [];
      for (let i = 0; i < result.data.result[0].values.length; i++) {
        timestamps.push(
          new Date(result.data.result[0].values[i][0] * 1000).toLocaleString());
      }

      const lineData = {
        labels: timestamps,
        datasets: datasets,
      };

      const options = {
        scales: {
          x: {
            type: 'linear',
            title: {
              display: true,
              text: "Time (mm:ss)",
            },
          },
          y: {
            type: 'linear',
            // Eventually we will want y-axis labels that reflect the units
            // being employed by a given chart. When that feature is ready,
            // this is where/how the title will be declared:
            //
            // title: {
            //   display: true,
            //   text: 'millicores',
            // },
            beginAtZero: true,
          },
        },
        animation: true,
        plugins: {
          legend: {
            display: false,
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
      <h2>{title}</h2>
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
