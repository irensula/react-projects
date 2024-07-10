import React, { useState } from 'react';

function Time() {
    let now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);
    
    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    };
    setInterval(updateTime, 1000);
  
    return (
        <div className="time-container">
        <h2>{time}</h2>
        {/* <button onClick={updateTime}>Get Time</button> */}
      </div>
    );
  }

export default Time;