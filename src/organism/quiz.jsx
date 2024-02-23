import { useState , useCallback} from "react"

import Question from "../molecule/question"
import QUESTIONS from "../../questions"
import Summary from "../molecule/Summary"
function Quiz(){
    const [answers,setAnswers]=useState([])
 const [answerState,setAnswerState]=useState('')
    const activeQuestionIndex=answerState===''? answers.length:answers.length-1

    const handleOptionClick =useCallback(function (answer){

     setAnswers((answers)=>{
        return [...answers,answer]
     })

  

    },[activeQuestionIndex])


const isQuizOver=activeQuestionIndex===QUESTIONS.length

if(isQuizOver){
return <Summary userAnswers={answers}/>}

    return   <main id="quiz">
     <Question Ques={QUESTIONS[activeQuestionIndex] } index={activeQuestionIndex} key={activeQuestionIndex} answers={answers} handleOptionClick={handleOptionClick} answerState={answerState} />
  </main>
}
export default Quiz
