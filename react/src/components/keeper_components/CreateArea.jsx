import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    function expand() {
        setExpanded(true);
    }


    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
      }
      function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

      }
    return(
        <div>
            <form className="note-form">
                {isExpanded && (
                    <input  
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title" 
                    />
                )}
                <textarea 
                    value={note.content}
                    onClick={expand}
                    onChange={handleChange}
                    name="content" 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1} 
                />
                <Zoom in={isExpanded}>
                    <Fab 
                        onClick={submitNote} 
                        sx={{background: "yellow", left: "20rem"}}>
                            <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;