import "./game.css";
import React from "react";

let hideBoard;

function verifyBoardSize(selectedLevel){ 
    /*Função responsavel por verificar a dimensão do tabuleiro conforme a dificuldade escolhida pelo utilizador*/
    let tam = 0;
    if(selectedLevel === "1"){
      tam = 60;
    }else if(selectedLevel === "2"){
      tam = 80;
    }else if(selectedLevel === "3"){
      tam = 100;
    }else{
     hideBoard = true;
    }
     hideBoard = true;
    return tam;
}

function StartBoard(tam){
    let board = []
    let letter = "a"
    for(let i = 0;i<tam;i++){
      board.push(<button className="boardButton" id={i}>{letter}</button>)
    }
  
    return board;
}

function MainBoard(props){
    const {selectedLevel} = props
    let tam;
    let board = []
    tam = verifyBoardSize(selectedLevel);

    board = StartBoard(tam)
    

    //Debug default 
    console.log(board);
    return(
        
       <div className="boardContent">{board}</div>
    )

}

export default MainBoard;
