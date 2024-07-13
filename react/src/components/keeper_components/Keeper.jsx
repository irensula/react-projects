import { useState } from "react";
import './keeper.css';

import Header from './Header.jsx';
import Note from './Note.jsx';
import CreateArea from "./CreateArea";
import Footer from './Footer.jsx';

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
            <Header />
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
            <Footer />
        </div>
    );
}

export default Keeper;