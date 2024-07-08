function Greeting() {
    const fName = "Irina";
    const lName = "Sula";

    const date = new Date();
    const currentTime = date.getHours();
    
    let greeting;

    const customStyle = {
        color: ""
    }

    if (currentTime < 12) {
        greeting = "Good morning";
        customStyle.color = "yellow";
    }
    if (currentTime < 18 && currentTime >= 12) {
        greeting = "Good afternoon,";
        customStyle.color = "green";
    } 
    if (currentTime > 18) {
        greeting = "Good evening";
        customStyle.color = "blue";
    }
    
    return (
      <div>
        <h1 className="greeting" style={customStyle}>{`${greeting}, ${fName} ${lName}!`}</h1>
    </div>
    );
  }

export default Greeting;