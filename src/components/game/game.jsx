import "./game.css";
import React from "react";
import Timer from "./clock/timer"



function GameComponents(props){

    const {gameStarted,words,board} = props

    let className = "MainContent-inactive"
    let valid;


    if(gameStarted === true){
      className = "MainContent-active"

    }

    if(gameStarted === true){
      valid = <Timer/>
    }else{
      valid = "Ocorreu um erro com o relogio!"
    }

    
    return(
        
    <div className={className}>
        <div className="boardContent">
           {board}
        </div>
        <div className="timerDiv">
          {valid}
          <section className="wordSection">
            <span >{words[0]}</span>
            <span>{words[1]}</span>
            <span>{words[2]}</span>
            <span>{words[3]}</span>
            <span>{words[4]}</span>
            <span>{words[5]}</span>
          </section>
        </div>
    </div>
    
    )

}

export default GameComponents;

