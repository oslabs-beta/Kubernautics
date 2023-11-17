import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from ".//data";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

// import './src/styless.css';

function App () {

  return (
    <div id="application">
      {/* <h1>Whole App</h1> */}
        <Main/>
        <NavBar/>
    </div>
  )
}

const Main = (props) => {

  return (
    <div id="main">
      <h1>Main Component</h1>
        <ChartsSection/>
        
  </div>
  )
}

const NavBar = (props) => {

  return (
    <div className='navBar'>
      <img src="images.jpg"/> 
      <li></li>
    {/* <li><a href="#">Change Table</a></li> */}
    <li><a href="#">Log Out</a></li>
    <li><a href="#">Menu</a></li>
    </div>
  )


}


const ChartsSection = (props) => {

//fetch request
//useEffect
//options
//state for both chartData and option



  // const [key, setChartOne] = useState({
  //   labels: Data.map((data) => data.year), 
  //   datasets: [
  //     {
  //       label: "Users Gained ",
  //       data: Data.map((data) => data.userGain),


  //       backgroundColor: [
  //         "rgba(61,330,321,1)",
  //         "rgba(85,190,190,4)",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0"
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2
  //     }
  //   ]
  // });
 
  return (
    <div className="Charts">
      {/* <p>Using Chart.js in React</p> */}
      <ChartOne chartData={chartData} />
      <ChartTwo chartData={chartData} />
      <ChartThree></ChartThree>

    </div>
  );
}

const ChartOne = ({ chartData }) => {

  const [chartOneState, setChartOneState] = UseState({

  })
  data={chartData}
  //create code to pull out CPU usage



  return (
    <div className="pie-chart">
      <Pie

        // data={chartData}


        options={{
          plugins: {
            refresh: 300
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}

const ChartTwo = ({ chartData }) => {
  return (
    <div id="bar-chart">
      <Bar

        data={chartData}



        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};



export default App;