import "../game.css"
import react from "react"
import {useState,useEffect} from "react"

function Timer(){

    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);

    let timer;


    useEffect(()=>{

        timer = setInterval(()=>{
            setSeconds(seconds+1);
            if(seconds === 59){
                setMinutes(minutes+1);
                setSeconds(0);
            }
            
        },1000
        )//1000 mls -> 1segundo

        return () => clearInterval(timer);
    });

    return(
        <span>{minutes}:{seconds}</span>
    )
  }
  
export default Timer;
  