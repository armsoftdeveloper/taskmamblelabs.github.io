/* React Hook */
import {useState} from "react";
/* TodoForm Style */
import "./_style.scss";
export default function TodoForm({onAdd , SetIsActive}){
    const [text,setText] = useState("")
    const [maxCharacters,setMaxCharacters] = useState("")
    const handleChange = (e) => {
        e.preventDefault()
        if(text.trim() != "" && text.length <= 54){
            onAdd(text);
            setText("")
            setMaxCharacters("")
        }
        else if(text.length > 54){
            setMaxCharacters("Task content can contain max 54 characters. !")
        }
        else{
            setMaxCharacters("Task is empty !")
        }
    }
    const onChange = (e) =>{
        setText(e.target.value)
        if (text != " "){
            SetIsActive(false)
        }
    }
    return(
        <form onSubmit={handleChange}>
            <h3 className="heading">task</h3>
            <div className="taskAdd form-group">
            <input type="text" value={text} onChange={onChange} className="form-control" placeholder="write here"/>
                <button className="to-media">Add</button>
            </div>
            <span className="warning">{maxCharacters}</span>
        </form>
    )
}