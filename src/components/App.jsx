import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { ReactDOM } from "react";

function App(){
    return(
        <div >
            <Heading/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Footer/>
        </div>
        
    )
}
    
export default App