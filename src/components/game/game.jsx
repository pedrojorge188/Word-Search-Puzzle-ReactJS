import "./game.css";
import React from "react";
import Timer from "./clock/timer"


function GameComponents(props){

    const {selectedLevel,gameStarted,words,board} = props

    let className = "MainContent-inactive"
    let timer;

    if(gameStarted === true && selectedLevel != '0'){
      className = "MainContent-active"
    }

    if(gameStarted === true && selectedLevel != '0'){
      timer = <Timer/>
    }else{
      timer = "Ocorreu um erro com o relogio!"
    }
    
    return(
        
    <div className={className}>
        <div className="boardContent">
           {board}
        </div>
        <div className="timerDiv">
          {timer}
          <section className="wordSection">
            <span >{words[0]}</span>
            <span>{words[1]}</span>
            <span>{words[2]}</span>
            <span>{words[3]}</span>
            <span>{words[4]}</span>
            <span>{words[5]}</span>
            <span>{words[6]}</span>
          </section>
        </div>
    </div>
    
    )

}

export default GameComponents;

