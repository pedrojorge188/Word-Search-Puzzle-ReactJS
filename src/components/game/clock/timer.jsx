import "../game.css"
import react from "react"
import {useState,useEffect} from "react"
import { TIME_OUT_GAME } from "../../../constants";
import {points} from "../../../helpers/checker"


function Timer(level){

    const [seconds,setSeconds] = useState(TIME_OUT_GAME);
    let timer;
    let win = 0;
   
    useEffect(()=>{

        timer = setInterval(()=>{
            setSeconds(seconds-1);
        },1000)

        if(points === 6){
            win = 1;
            setSeconds(0);
        }

        if(seconds === 0){

            if(win === 1){
                alert("Voçê Ganhou o jogo !\n Obteve : "+10*10+"->pontos!\n");
            }else{
                alert("O jogo terminou !\n Obteve : "+points*10+"->pontos!\n");
            }
            window.location.reload('../../app.js');
            points = 0;
        }
        return () => clearInterval(timer);
    });


    return(
            <span>{seconds} <i class="fa fa-clock-o"></i> </span>
    )
  }
  
  
export default Timer;