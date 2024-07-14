import React, { useState } from 'react';

function Time() {
    let now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    const [time, setTime] = useState(now);
    
    function updateTime() {
        const newTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        setTime(newTime);
    };
    setInterval(updateTime, 100);
  
    return (
        <div className="time-container">
        <h2>{time}</h2>
      </div>
    );
  }

export default Time;