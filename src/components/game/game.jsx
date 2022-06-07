import "./game.css";
import React from "react";
import Timer from "./clock/timer"

function GameComponents(props){

    const {selectedLevel,gameStarted,words,board} = props

    let className = "MainContent-inactive"
    let timer;

    if(selectedLevel === "1"){
      document.getElementById('boardContent').style.gridTemplateColumns = 'repeat(13,25px)';
    }else if(selectedLevel === "2"){
      document.getElementById('boardContent').style.gridTemplateColumns = 'repeat(14,25px)';
    }else if(selectedLevel === "3"){
      document.getElementById('boardContent').style.gridTemplateColumns = 'repeat(15,25px)';
    }

    if(gameStarted === true){
      className = "MainContent-active"
    }

    if(gameStarted === true){
      timer = <Timer/>
    }else{
      timer = "Ocorreu um erro com o relogio!"
    }
    
    return(
        
    <div className={className}>
        <div className="boardContent" id="boardContent">
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

