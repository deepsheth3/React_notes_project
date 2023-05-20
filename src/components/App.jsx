import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./createArea";


function App(){
    
    const [notes,setNotes] = useState([])

    function addNote(note){
        setNotes(prevValue => {
            return [
                ...prevValue,
                note
            ]
        })
    }

    function deleteNote(id){
        setNotes(prevValue=>{
            return prevValue.filter((noteItem,index)=>{ return index != id}) 
        })
    }

    return(
        <div>
            <Heading/>
            <CreateArea onAdd={addNote}/>
            {notes.map((singleNote,index)=>(<Note key = {index} id={index} title = {singleNote.title} content = {singleNote.content} onDelete={deleteNote}/>))}
            <Footer/>
        </div>
    )
}
    
export default App