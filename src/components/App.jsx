import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function entryNote(singleNote){
    return(
        <Note
            key = {singleNote.key}
            title = {singleNote.title}
            content = {singleNote.content}
        />
    )
}

function App(){
    return(
        
        <div>
            <Heading/>
            {notes.map(entryNote)}
            <Footer/>
        </div>

    )
}
    
export default App