import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import "./Login.css"
import auth from "./Auth"
const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [message, setmessage] = useState("")

    const [allEntry, setallEntry] = useState([])
    let history=useHistory();
    const submitform =(e)=>{
        
        e.preventDefault()
        const newentry={email:email, password:password, username:username}
        setallEntry([...allEntry,newentry])
        if(newentry.email=="minshunitrkl@gmail.com"&&newentry.username=="admin"&&newentry.password=="admin")
        {
            auth.authenticated=true
            history.push("/quiz")
        }
        else 
        {
            setmessage("!Unauthorized access,please enter right information")
            history.push("/")
        }
    }
    return (
        <div className="loginform">
            
        <form onSubmit={submitform} className="actualform">
            <div className="entry"><h3>{message}</h3></div>
            <div className="entry">
                <label htmlFor="user">UserName:</label>
                <input required placeholder="Enter UserName"type="text" name="user" id="email" autoComplete="off" value={username}
                onChange={(e)=>(setusername(e.target.value))}/>
            </div>
            <div className="entry">
                <label htmlFor="email" >Email:</label>
                <input required placeholder="Enter your Email"type="email" name="email" id="email" autoComplete="off" value={email}
                onChange={(e)=>(setemail(e.target.value))}/>
            </div>
            <div className="entry">
                <label htmlFor="password">Password:</label>
                <input required placeholder="Enter your password"type="password" name="password" id="password" autoComplete="off" value={password} 
                onChange={(e)=>(setpassword(e.target.value))}/>
            </div>
            {/* <h1>email:-{email}</h1>
            <h1>username:-{username}</h1>
            <h1>password:-{password}</h1> */}
            <div className="entry">
             <button type="submit" >Login</button>
            </div>
            
        </form>
        </div>
    )
}

export default Login
