import React from 'react';
import NavBar from './NavBar';
import Main from './Main';

//effectively will be our home page

function App() {
  return (
    <div id='application'>
      <Main />
      <NavBar />
    </div>
  );
}

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

export default App;
