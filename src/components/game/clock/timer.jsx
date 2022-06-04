import "../game.css"
import react from "react"
import {useState,useEffect} from "react"
import { TIME_OUT_GAME } from "../../../constants";

function Timer(){

    const [seconds,setSeconds] = useState(TIME_OUT_GAME);
    let timer;


    useEffect(()=>{

        timer = setInterval(()=>{
            setSeconds(seconds-1);
        },1000)
        
        if(seconds === 1){
            setSeconds(0);
            alert("O seu tempo terminou !\nObteve n pontos !");
            window.location.reload('../../app.js');
        }
        return () => clearInterval(timer);
    });

    return(
            <span>{seconds} <i class="fa fa-clock-o"></i> </span>
    )
  }
  
  
export default Timer;
  