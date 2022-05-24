import "./game.css";
import React from "react";
import Timer from "./clock/timer"


function verifyBoardSize(selectedLevel){ 
  /*Função responsavel por verificar a dimensão do tabuleiro conforme a dificuldade escolhida pelo utilizador*/
  let tam = 0;
  if(selectedLevel === "1"){
    tam = 60;
  }else if(selectedLevel === "2"){
    tam = 80;
  }else if(selectedLevel === "3"){
    tam = 100;
  }
  return tam;
}

function StartBoard(tam){
  let board = []
  for(let i = 0;i<tam;i++){
    let letter = "a"
    board.push(<button className="boardButton" id={i}>{letter}</button>)
  }
  return board;
  
}

function GameComponents(props){

    const {selectedLevel,gameStarted} = props

    let className = "MainContent-inactive"
    let tam;
    let board = []
    let valid;

    tam = verifyBoardSize(selectedLevel);

    board = StartBoard(tam)

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

            <span >HTMl</span>
            <span>CSS</span>
            <span >JS</span>
            <span>React</span>
            <span >VUE</span>
          </section>
        </div>
    </div>
    
    )

}

export default GameComponents;

