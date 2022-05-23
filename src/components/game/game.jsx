import "./game.css";
import React from "react";

let hideBoard;

function verifyBoardSize(selectedLevel){ 
    /*Função responsavel por verificar a dimensão do tabuleiro conforme a dificuldade escolhida pelo utilizador*/
    let tam = 0;
    if(selectedLevel === "0"){
    }else if(selectedLevel === "1"){
      tam = 20;
    }else if(selectedLevel === "2"){
      tam = 40;
    }else{
      tam = 60;
    }
    hideBoard = true;
    return tam;
}

function StartBoard(tam){
    let board = []
    for(let i = 0;i<tam;i++){
      board.push(<button className="boardButton" key={i}>a</button>)
      console.table(board)
    }
  
    return board;
}

function MainBoard(props){
    const {selectedLevel} = props
    let board = []
    let tam;

    board = StartBoard(tam)
    
    tam = verifyBoardSize(selectedLevel);
    console.log(tam);
    
    return(
        {board}
    )

}

export default MainBoard;
