import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // -> automatic module import based on the file
import { enUS } from 'date-fns/esm/locale';
import 'chartjs-adapter-date-fns';

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
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `${query}${rangeStmt}`,
        }),
      });
      const result = await response.json();
      const colorCodes = [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [255, 255, 0],
        [255, 0, 255],
        [0, 255, 255],
        [128, 0, 0],
        [0, 128, 0],
        [0, 0, 128],
        [128, 128, 0],
        [128, 0, 128],
        [0, 128, 128],
        [64, 0, 0],
        [0, 64, 0],
        [0, 0, 64],
        [64, 64, 0],
        [64, 0, 64],
        [0, 64, 64],
      ];
      setTitle(result.data.result[0].metric.__name__.replaceAll('_', ' '));
      let labels = [];
      const datasets = result.data.result.reduce((res, dataset, i) => {
        const colorIndex = i;
        res.push({
          label: dataset.metric.pod,
          //From a pre-curated array of colors.
          //Makes it so that upon chart refresh, the lines still retain the same color scheme.
          borderColor: `rgba(${colorCodes[colorIndex].join(',')})`,
          data: dataset.values.map((val) => {
            // The timestamps are provided in Unix time format -- the number of
            // seconds that have elapsed since Jan 1st, 1970 (UTC) aka Unix epoch.
            // These seconds need to be converted to milliseconds before being
            // passed into a Date object.
            const timestamp = val[0] * 1000;
            labels.push(timestamp);
            return [timestamp, val[1]];
          }),
        });
        return res;
      }, []);

      const lineData = {
        labels: labels,
        datasets: datasets,
      };

      const options = {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute',
              displayFormats: {
                minute: 'k:mm',
              },
            },
            adapters: {
              date: {
                locale: enUS,
              },
            },
            title: {
              display: true,
              text: 'Time (mm:ss)',
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
            display: true,
            labels: {
              boxWidth: 5,
              boxHeight: 5,
              fontSize: 4,
              itemSpacing: 2,
            },
          },
        },
        elements: {
          backgroundColor: 'rgba(50, 50, 200, 80)',
          point: {
            radius: 5,
            hoverRadius: 2,
          },
        },
      };
      setLineData(lineData);
      setOptions(options);
    } catch (err) {
      return console.error('Error fetching data', err);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up an interval to fetch data every 30 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 15000); // 30 seconds in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  // Conditional rendering of lineData and options
  // Line graph doesn't render until lineData and options both exist
  return (
    <div className='monitor'>
      <h2>{title}</h2>
      {lineData && options && <Line data={lineData} options={options} />}
    </div>
  );
};

export default MonitoringComponent;
