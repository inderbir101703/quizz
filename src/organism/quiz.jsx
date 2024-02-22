import { useState , useCallback} from "react"
import imgPath from '../assets/quiz-complete.png'
import Question from "../molecule/question"
import QUESTIONS from "../../questions"
function Quiz(){
    const [answers,setAnswers]=useState([])
 const [answerState,setAnswerState]=useState('')
    const activeQuestionIndex=answerState===''? answers.length:answers.length-1

    const handleOptionClick =useCallback(function (answer){
        setAnswerState('answered')
     setAnswers((answers)=>{
        return [...answers,answer]
     })

     setTimeout(()=>{
        if(answer===QUESTIONS[activeQuestionIndex].answers[0]){
            setAnswerState('correct')
        }
        else{
            setAnswerState('wrong')
        }
        setTimeout(()=>{
         setAnswerState('')
        },2000)
     },[1000])
    },[activeQuestionIndex])


const isQuizOver=activeQuestionIndex===QUESTIONS.length

if(isQuizOver){
return <div id="summary">
    <img src={imgPath} alt="trophy icon"/>
<h2>Quiz Completed</h2>
<p>quiz is over</p></div>}

    return   <main id="quiz">
     <Question Ques={QUESTIONS[activeQuestionIndex] } answers={answers} handleOptionClick={handleOptionClick} answerState={answerState} />
  </main>
}
export default Quiz
