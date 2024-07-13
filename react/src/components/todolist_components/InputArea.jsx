import { useState } from "react";

function InputArea(props) {
    
    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }
    
  return (
    <div className="form">
      <input 
      className="todolist-input"
      onChange={handleChange} type="text" value={inputText} />
      
      <button
            className="todolist-button"
            onClick={() => {
            props.onAdd(inputText);
            setInputText("");
        }}>
        <span className="todolist-span">Add</span>
      </button>
    
    </div>
  );
}

export default InputArea;