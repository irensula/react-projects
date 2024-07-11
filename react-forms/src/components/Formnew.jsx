import { useState } from "react";
function Formnew() {
    // take name
    const [name, setName] = useState("");
    function handleChange(event) {
        console.log(event.target.value);
        setName(event.target.value);
    }
    // change heading
    const [headingText, setHeading] = useState("");
    function handleClick() {
        setHeading('!');
    }
    // change button's color
    const [isMouseOver, setMouseOver] = useState(false);
    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }

    return(
        <div className="container">
            <h1>Hello {name} { headingText }</h1>
            <input 
                onChange={handleChange}
                type="text" 
                placeholder="What's your name?"
                value={name}
            />
            <button 
                style={{backgroundColor: isMouseOver ? "black" : "white" }} 
                onClick={handleClick} 
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                type="submit">Submit
            </button>
        </div>
    );
}

export default Formnew;