import react, { useState } from "react";

function CreateArea(props){

    const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title:'',
        content:''
    })

    function handleChange(event){
        const {name,value}=event.target;
        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note)
        event.preventDefault()
        setNote({
            title:'',
            content:''
        })
    }

    function expand(){
        setIsExpanded(true)
    }

    return(
        <div>
            <form>
                {isExpanded && <input name='title' value={note.title} onChange={handleChange} placeholder="Title" autoSave="off"/>}
                <textarea onClick={expand} name='content' value={note.content} onChange={handleChange} placeholder="Take a note..." rows={isExpanded?3:1}/>
                {isExpanded && <button onClick={submitNote}>Add</button>}
            </form>
        </div>
    )
}

export default CreateArea