import React,{useState} from 'react'
import quest from "./Data.json"
const TextComponent = (prop) => {
    const [inputvalue, setinputvalue] = useState("")
    const textcheck=(e)=>
    {
        e.preventDefault()
        setinputvalue(e.target.value)
        
    }
    return (
        <div className="TextComp">
                <input type="text" name="answer" onChange={textcheck} value={inputvalue} placeholder="Enter your answer"/>
        </div>
    )
}

export default TextComponent
