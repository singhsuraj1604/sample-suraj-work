const { default: App } = require("./App");

   App.jsx 
        
          =>>


          import React, { useState } from "react";

          const App = () => {
          
              let newTime = new Date().toLocaleTimeString();
              const [ctime, setCtime] = useState(newTime);
          
              const UpdateTime = () => {
          
              newTime = new Date().toLocaleTimeString();
              setCtime(newTime);
             
            };
              return ( 
              <>
          
              <h1> {ctime} </h1>
              <button onClick={UpdateTime}> get time </button>
           
             </>
            );
          }
          
          
          export default App;
   

          index.js
          =>>

          import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import App from "./App"


ReactDOM.render(  <App /> , document.getElementById("root"));


    index.css
      =>>

      
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /*background-color: #dd22dd;*/
    font-family: "Josefin Sans", "Arial Narrow",Arial,sans-serif;
  
  }
  .heading_style {
    padding: 30px 0;
    text-align: center;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    background-color: red;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  div {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
   button{
     padding: 12px 20px;
     background: #00008b;
     color: greenyellow;
     border: 2px solid #ecf0f1;
     outline: none;
     border-radius: 5px;
     text-transform: uppercase;
     cursor: pointer;
   }
  
  
  
  
  
  
