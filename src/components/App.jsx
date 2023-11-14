import React from "react";
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
        <Charts/>
        
  </div>
  )
}

const NavBar = (props) => {

  return (
    <div className='navBar'>
      <li></li>
    {/* <li><a href="#">Change Table</a></li> */}
    <li><a href="#">Log Out</a></li>
    <li><a href="#">Menu</a></li>
    </div>
  )


}


const Charts = (props) => {
  return (
  <div className="charts">
    <h2>Metrics displays will go here...</h2>
     <ChartOne/> 
     <ChartTwo/> 
     <ChartThree/> 
   </div>
  )
}


const ChartOne = (props) => {
  return (
    <div id='ChartOne'>
      <h1>The first metric will go here</h1>
    </div>
  )
}

const ChartTwo = (props) => {
  return (
    <div id='ChartTwo'>
      <h1>The second metric will go here</h1>
    </div>
  )
}

const ChartThree = (props) => {
  return (
    <div id='ChartThree'>
      <h1>The third metric will go here, etc.</h1>
    </div>
  )
}



export default App;