// import { useState } from "react";

function ToDoItem(props) {

    return(
        <div
            onClick={() => {
                props.onChecked(props.id);
        }}
        >
            <li className="todolist-item">{props.text}</li>
        </div>
    );
}
export default ToDoItem;