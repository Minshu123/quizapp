import React,{useState} from 'react'
import quest from "./Data.json"
import { useHistory } from 'react-router'
import "./Quiz.css"
const Quiz = () => {

    const [index, setindex] = useState(0)
    const [score, setscore] = useState(0)
    const [showscore,setshowscore]=useState(false);
    const [resultarray, setresultarray] = useState(()=>{
        var array=new Array(quest.length)
        for(let i=0;i<quest.length;i++)
        {
            array[i]=false
        }
        return array
    })
    const setarray=(check,ind)=>{
        var array=new Array(quest.length)
        for(let i=0;i<quest.length;i++)
        {
            array[i]=resultarray[i];
        }
        array[ind]=check;
        setresultarray(array)
    }

    const getresultscore=()=>{
        let count=0;
        for(let i=0;i<quest.length;i++)
        {
            if(resultarray[i])
            {
                count++;
            }
        }
        setscore(count);
    }



    const increaseIndex=()=>{
        if(index<quest.length-1)
        {
            setindex(index+1)
        }
    }

    const decreaseIndex=()=>{
        if(index>0)
        {
            setindex(index-1)
        }
    }

    const finalscore=()=>{
        getresultscore();
        setshowscore(true);
    }

    const checkcheckbox=(e)=>{
        e.preventDefault();
        var set=new Set();
        for(let i in quest[index].ans)
        {
            set.add(quest[index].ans[i])
        }
        var check=true;
        var count=0;
        for(let i=0;i<quest[index].options.length;i++)
        {
            var flag=document.getElementById(quest[index].options[i].id);
            var value=document.getElementById(quest[index].options[i].id).value;
            if(flag.checked==true)
            {
                if(set.has(value))
                {
                    count++;
                }
                else 
                {
                    check=false;
                    break;
                }
            }
        }
        if(check&&count==quest[index].ans.length)
        {
            setarray(true,index)
        }
        else 
        {
            setarray(false,index)
        }
    }
    
    const checktextradiobox=(e)=>
    {
        e.preventDefault();
        if(e.target.value==quest[index].ans)
        {
            setarray(true,index)
        }
        else 
        {
            setarray(false,index)
        }
        for(let i=0;i<quest.length;i++)
        {
            console.log(resultarray[i]+" "+i)
        }
        console.log(quest[index].ans)
        console.log(e.target.value)
        
    }




    
    return (
        <div className="condition">
            {showscore?(<div className="quiz">
                <h2>Your Score is {score}</h2>
                <h2>Thank you for taking react quiz</h2>
            </div>):(
        <div className="quiz">
            <div className="question-part">
                <h3>{quest[index].question}</h3>
            </div>
            <div className="answer-part">
                {(quest[index].type=="radio")?(quest[index].options.map((answeroption)=>(
                    
                    <button onClick={checktextradiobox} value={answeroption.text}><span>{answeroption.text}</span></button>
               ))):
                (quest[index].type=="text"?(
                    <input type="text" name="answer" onChange={checktextradiobox}  placeholder="Enter your answer"
                />
                ):(
                    <form onSubmit={checkcheckbox} className="checkboxform">{
                        quest[index].options.map((answeroption)=>(
                            <div className="checkboxforminside">
                                <input type="checkbox" id={answeroption.id} value={answeroption.text}/>
                                <span>{answeroption.text}</span>
                            </div>
                        ))}
                        <button type="submit">Submit</button>
                    </form>
                    
                )
               
               )}
            </div>

            <div className="buttongroup">
            <div className="buttn_first">
                <button  onClick={decreaseIndex}>Prev</button>
                <button  onClick={increaseIndex}>Next</button>
            </div>
            <div className="buttn_submit">
                <button onClick={()=>finalscore()}>Submit the quiz</button>
            </div>
            </div>
        </div>)}
         
    </div>
    )
}

export default Quiz
