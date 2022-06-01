import "../game.css"
import react from "react"
import {useState,useEffect} from "react"

function Timer(){

    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds2,setSeconds2] = useState(0);
    const [minutes2,setMinutes2] = useState(0);
    let timer;


    useEffect(()=>{

        timer = setInterval(()=>{
            setSeconds(seconds+1);
            if(seconds === 9 && seconds2 != 5){
                setSeconds(0);
                setSeconds2(seconds2+1);
            }else if(seconds === 9 && seconds2 === 5){
                setSeconds(0);
                setSeconds2(0);
                setMinutes(minutes+1);
            }else if(seconds === 9 && seconds2 === 5 && minutes === 9){
                setSeconds(0);
                setSeconds2(0);
                setMinutes(0);
                setMinutes2(minutes2+1);
            }
        },1
        )//1000 mls -> 1segundo

        return () => clearInterval(timer);
    });



    return(
            
            <span>{minutes2}{minutes}:{seconds2}{seconds}</span>
    )
  }
  
export default Timer;
  