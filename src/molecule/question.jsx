import { useCallback, useEffect, useState } from "react"

import ProgresBar from "./ProgressBar"
import UserButton from "../AnswerButton"
function Question({Ques,handleOptionClick,answers,answerState}){



const handSkipAnswer=useCallback(()=>{handleOptionClick(null)} ,[handleOptionClick])
//key here is important for creation of new timers ..other wise bar would not have working multilpe time so..key isss soooo important
return <div id="question">
 <ProgresBar 
 key={Ques.id}
  timeOut={10000}
   timeOutFunction={()=>{handSkipAnswer()}}/>
  <h2 >{Ques.text} </h2>
  <ul id="answers">
    {Ques?.answers.map((answer,ansInd)=>{
    const isSelected=answers[answers.length-1]===answer
    let classes=''
    if(answerState==='answered'&& isSelected)
    classes='selected'
    if((answerState==='correct'||answerState==='wrong')&& isSelected)
    classes=answerState
    return <UserButton key={answer} addClasses={classes}  onClick={()=>handleOptionClick(Ques.answers[ansInd])}>{answer}</UserButton>})}
  </ul>
</div>
}
export default Question