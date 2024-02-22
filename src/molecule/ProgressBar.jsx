import { useEffect, useState } from "react"

function ProgresBar({timeOut,timeOutFunction}){
    const [curValue,setCurValue]=useState(timeOut)


    //wrapping timeout in useEfffects to have multiple timers 
    useEffect(()=>{
        console.log('setting out')
        const timer=setTimeout(timeOutFunction,timeOut)
        return ()=>{
            clearTimeout(timer)
        }
    } ,[timeOut,timeOutFunction])

useEffect(()=>{
    console.log('setting in')
    const interval=setInterval(()=>{
       
  setCurValue((curValue)=>curValue-100)
    },100)

    return ()=>{    
clearInterval(interval)

    }
},[])


return <progress id="question-time"  max={timeOut} value={curValue}/>
}

export default ProgresBar