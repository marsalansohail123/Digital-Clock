import React, { useState } from "react";
import './App.css';

const App = () => {
  let clock = new Date().toLocaleTimeString();
  // console.log(clock)
  const [currTime, setCurrTime] = useState(clock)
  const getTime = () => {
    clock = new Date().toLocaleTimeString();
    setCurrTime(clock)
  }
  setInterval(() => {
    getTime()
  }, 1000);
  return (
    <div className="main bg-dark">
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1 className='text-center text-white font_size shadow'>{currTime}</h1>
      </div>
    </div>
  );
}

export default App;