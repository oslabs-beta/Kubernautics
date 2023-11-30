import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // -> automatic module import based on the file
import { enUS } from 'date-fns/locale';
import 'chartjs-adapter-date-fns';

const MonitoringComponent = ({ query, range, stepSize }) => {
  const [lineData, setLineData] = useState();
  const [options, setOptions] = useState();
  const [title, setTitle] = useState();

  // Render a monitoring chart based on selected query 
  const fetchData = async () => {
    try {
      const rangeStmt = range
        ? `[${range}${stepSize ? ':' + stepSize + 's' : ''}]`
        : '';
      console.log(rangeStmt);
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
      console.log(result);
      // Curated list of pre-defined colors
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
          borderColor: `rgba(${colorCodes[colorIndex].join(',')})`,
          data: dataset.values.map((val) => {
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

      // Style configuration for the rendered chart
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
    fetchData();
    // Set up an interval to fetch data every 30 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000 * (stepSize + 1 || 15)); 
    return () => clearInterval(intervalId);
  }, []); 

  // Conditional rendering of lineData and options
  return (
    <div className='monitor'>
      <h2>{title}</h2>
      {lineData && options && <Line data={lineData} options={options} />}
    </div>
  );
};

export default MonitoringComponent;
