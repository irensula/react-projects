function Greeting() {
    const date = new Date();
    const currentTime = date.getHours();
    
    let greeting;

    const customStyle = {
        color: ""
    }

    if (currentTime < 12) {
        greeting = "Good morning,";
        customStyle.color = "red";
    }
    if (currentTime < 18 && currentTime > 12) {
        greeting = "Good afternoon,";
        customStyle.color = "green";
    } else {
        greeting = "Good evening,";
        customStyle.color = "blue";
    }
    
    return (
      <div>
        <h1 className="greeting" style={customStyle}>{ greeting }</h1>
    </div>
    );
  }

export default Greeting;