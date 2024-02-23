import { useCallback, useEffect, useState } from "react"
import QUESTIONS from "../../questions"
import ProgresBar from "./ProgressBar"
import UserButton from "../AnswerButton"
function Question({handleOptionClick,answers,index}){
const [answer,setAnswer]=useState({selectedAnswer:'',isCorrect:null})


const handSkipAnswer=useCallback(()=>{handleOptionClick(null)} ,[handleOptionClick])
let timer=10000
if(answer.selectedAnswer){
    timer=100
}
const handleSelect=(ans)=>{
    setAnswer({
        selectedAnswer:ans,
        isCorrect:null
    })
    setTimeout(()=>{
      setAnswer({
            selectedAnswer:ans,
            isCorrect:QUESTIONS[index].answers[0]===ans
        })

        setTimeout(()=>{

            handleOptionClick(ans) },2000)
    },[1000])
}

let answerState=''
if(answer.selectedAnswer && answer.isCorrect!==null){
    answerState=answer.isCorrect?'correct':'wrong'
}
else if(answer.selectedAnswer){
    answerState='answered'
}
//key here is important for creation of new timers ..other wise bar would not have working multilpe time so..key isss soooo important


return <div id="question">
 <ProgresBar 
 key={QUESTIONS[index].id}
  timeOut={timer}
  mode={answerState}
   timeOutFunction={answer.selectedAnswer===''? handSkipAnswer:null}/>

  <h2 >{QUESTIONS[index].text} </h2>

  <ul id="answers">
    {QUESTIONS[index].answers.map((curAns,ansInd)=>{
    const isSelected=answer.selectedAnswer===curAns
    let classes=''
    if(answerState==='answered'&& isSelected)
    classes='selected'
    if((answerState==='correct'||answerState==='wrong')&& isSelected)
    classes=answerState
    return <UserButton key={curAns} addClasses={classes}  onClick={()=>handleSelect(curAns)}  disabled={answerState!==''}>{curAns}</UserButton>})}
  </ul>
</div>
}
export default Question