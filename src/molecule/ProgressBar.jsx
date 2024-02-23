import { useEffect, useState } from "react"

function ProgresBar({timeOut,timeOutFunction,mode}){
    const [curValue,setCurValue]=useState(timeOut)


    //wrapping timeout in useEfffects to have multiple timers

    useEffect(()=>{

        const timer=setTimeout(timeOutFunction,timeOut)
        return ()=>{
            clearTimeout(timer)
        }
    } ,[timeOut,timeOutFunction])

useEffect(()=>{

    const interval=setInterval(()=>{
       
  setCurValue((curValue)=>curValue-100)
    },100)

    return ()=>{    

clearInterval(interval)

    }
},[timeOut])


return <progress id="question-time"  max={timeOut} value={curValue} className={mode}/>
}

export default ProgresBar