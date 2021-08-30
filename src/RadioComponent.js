import React,{useState} from 'react'
import quest from "./Data.json"
import "./RadioComponent.css"
import hold from "./Hold"
const RadioComponent = (props) => {
    const [disable, setdisable] = useState(props.disable)
    const radiocheck=(e)=>
    {
        e.preventDefault();
        hold.arr[props.index].response=props.value
        setdisable(true)
        console.log(hold.arr[props.index].response)
    }
    return (
        <div className="RadioComp">
            {/* <button disabled={disable} name={ props.insidevalue} onClick={radiocheck} value={props.value}><span>{props.insidevalue}</span></button> */}
            <input type="radio" id={props.index} name={ props.name} onChange={radiocheck} value={props.value}/>
            <label for={props.index}>{props.insidevalue}</label><br></br>
        </div>
    )
}

export default RadioComponent

