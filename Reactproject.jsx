index.js file
    || 

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(< App />,document.getElementById("root"));



App.jsx file 
     ||
    

import React from "react";

function App() {
let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate > 1 && currDate <12) {
  greeting = "Good Morning";
  cssStyle.color = "#oob894";
  } else if (currDate >=12 && currDate < 20) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (currDate >=20 && currDate <= 24) {
    greeting = "Good Night";
    cssStyle.color = "black"
  }

  return(
    <>
      <div>
        <h1>
          Hello sir, <spam style= {cssStyle}> {greeting} </spam>
        </h1>
      </div>
    </>
  )
}

export default App;