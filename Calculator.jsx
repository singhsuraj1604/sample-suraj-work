    INDEX.JS FILE
        ||

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App /> ,document.getElementById("root"));


       App.JSX FILE
           ||

import React from "react";
import { add, sub, mult} from "./Calc";
function App() {
  return (
    <>
      <ul>
      <li> {add(40, 4)}</li>
      <li> {sub(40, 4)}</li>
      <li> {mult(40, 4)}</li>
      </ul>
    </>
  );
}


export default App;

