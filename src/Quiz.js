import React, { useState } from "react";
import quest from "./Data.json";
import { useHistory } from "react-router";
import "./Quiz.css";
const Quiz = () => {
  const [state, setState] = useState({
    answers: {},
    currentIndex:0,
  });
  const [index, setindex] = useState(0);
  const [score, setscore] = useState(0);
  const [showscore, setshowscore] = useState(false);
  const [resultarray, setresultarray] = useState(() => {
    var array = new Array(quest.length);
    for (let i = 0; i < quest.length; i++) {
      array[i] = false;
    }
    return array;
  });
  
  const increaseIndex = () => {
    if (index < quest.length - 1) {
      setindex(index + 1);
    }
  };

  const decreaseIndex = () => {
    if (index > 0) {
      setindex(index - 1);
    }
  };

  const getresultscore = () => {
    let count = 0;
    for (let i = 0; i < quest.length; i++) {
        if(quest[i].type==="radio"||quest[i].type==="text")
        {
            if(state.answers[i]===quest[i].ans)
            {
              count++;
            }
        }
        else 
        {
            let ginti=0;
            let tem;
            let flag=true;
            for(let j=0;j<quest[i].ans.length;j++)
            {
                tem=""+quest[i].ans[j];
                // console.log(tem)
                // console.log(state.answers[i][tem])
                
                if(state.answers[i][tem]==undefined||state.answers[i][tem]===false)
                {
                  flag=false;
                  break;
                }
                else 
                {
                    ginti++;
                }
            }
            if(flag&&ginti==quest[i].ans.length)
            {
                count++;
            }
        }
    }
    console.log("count is "+count)
    setscore(count);
    console.log(score);
  };

  const finalscore = () => {
    getresultscore();
    setshowscore(true);
  };
  
  const onChange = event => {
    if (quest[index].type === "radio" || quest[index].type === "text") {
      state.answers[index] = event.target.value;
    } else {
      
    }
    
    setState({
      ...state
    });
    console.log(state.answers)
  };
  const firecheckbox=(e)=>
  {
      if(state.answers[index]==undefined)
      {
        state.answers[index]={}
      }

      let val=""+e.target.value;
      let check=e.target.checked;

      state.answers[index][val]=check;
      setState({
        ...state
      });
      console.log(val+" :- "+check)
      console.log(state.answers)
  }
  return (
    <div className="condition">
      {showscore ? (
        <div className="quiz">
          <h2>Your Score is {score}</h2>
          <h2>Thank you for taking react quiz</h2>
        </div>
      ) : (
        <div className="quiz">
          <div className="question-part">
            <h3>{quest[index].question}</h3>
          </div>
          <div className="answer-part">
            {quest[index].type == "radio" ? (
              quest[index].options.map(answeroption => (
                // if(hold.arr[index].response==answeroption.text)
                // {
                //     return <input type="radio"  name={ quest[index].ans} value={answeroption.text}/>
                // }
                // else
                // {
                //     return <input type="radio"  name={ quest[index].ans} value={answeroption.text}/>
                // }
                // <RadioComponent name={quest[index].ans} value={answeroption.text} insidevalue={answeroption.text} index={index}/>
                <div className="checkboxforminside">
                    <label>
                        <input
                            type="radio"
                            name={quest[index].ans}
                            value={answeroption.text}
                            onChange={onChange}
                            checked={(state.answers[index] === answeroption.text)?true:false}
                        />
                        {`      ${answeroption.text}`}
                    </label>
                </div>
              ))
            ) : quest[index].type == "text" ? (
              <input
                type="text"
                name="answer"
                onChange={onChange}
                value={state.answers[index]}
                placeholder="Enter your answer"
              />
            ) : (quest[index].options.map(answeroption => (
                  <div className="checkboxforminside">
                      <label>
                        <input
                        type="checkbox"
                        id={answeroption.id}
                        value={answeroption.text}
                        checked={state.answers[index]!=undefined&&state.answers[index][answeroption.text]}
                        onChange={firecheckbox}
                        />
                        {`      ${answeroption.text}`}</label>
                  </div>
                ))
            )}
          </div>
          <div className="buttongroup">
            <div className="buttn_first">
              <button onClick={decreaseIndex}>Prev</button>
              <button onClick={increaseIndex}>Next</button>
            </div>
            <div className="buttn_submit">
              <button onClick={() => finalscore()}>Submit the quiz</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;