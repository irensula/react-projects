import { useState } from "react";

import Note from './Note.jsx';
import CreateArea from "./CreateArea";

function Keeper() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes  => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return(
        <div className="keeper">
            <CreateArea onAdd={ addNote } />
            {notes.map((noteItem, index) => {
                return (
                    <Note 
                        key={index}
                        id={index}
                        title={noteItem.title} 
                        content={noteItem.content}
                        onDelete={deleteNote} 
                    />)
                })}
        </div>
    );
}

export default Keeper;