import { useState } from "react";

function Todolist() {
    
    const [inputText, setInputText] = useState("");
    
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    const [items, setItems] = useState([]);
    
    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");
      }
    
    return (
        <div className="todolist-container">
            <div className="todolist-heading">
                <h1>To-Do List</h1>
            </div>
            <div className="todolist-form">
                <input 
                    type="text" 
                    name="newItem"
                    onChange={handleChange} 
                    value={inputText}
                />
                <button onClick={addItem}>
                <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todoItem) => <li>{todoItem}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Todolist;