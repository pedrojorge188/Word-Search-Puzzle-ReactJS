import "./assets/styles/App.css";
import React from "react";
import {useState} from "react";

import {
        Header,   
        Footer,
        SelectGame,
        GameComponents
} from "./components/route"

import {
        LETTER,
        WORDS,
        DIRECTION,
        
} from "./constants/index"

import{

    selectDirection,
    randomNumber,
    StartBoard,

}from "./helpers/index.router"


function randomWords(selectWords,wordSize){
  let random = randomNumber(25-wordSize);

  selectWords = WORDS.slice(random,random+wordSize); //Para Alterar

  return selectWords
}

function gameSetup(tam,board,selectWord,wordSize){
    let  randomPosition , randomDirection
    randomPosition = randomNumber(tam)
    
    if(tam > 0){
      for(let i=0;i<wordSize;i++){
        randomPosition = randomNumber(tam);
        randomDirection = DIRECTION[randomNumber(6)];
  
       selectDirection(randomDirection,randomPosition,board,selectWord,tam,i);
      }
    }

}


function App() {
  /*Variaveis utilizadas no scope*/
  let tam, wordSize;
  let board = [];
  let selectWords = []

  /*Variveis de estado responsaveis pela manipulação de dados de inicio e fim de jogo*/
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const handleGameStart = () => {   //function to know when game starts

    if(gameStarted){
      setGameStarted(false);
    }else{      
      setGameStarted(true);
    }
  };

  const handleLevelChange = (event) => {
    const {value} = event.currentTarget;
    setSelectedLevel(value);
  }

  // Tamanho do tabuleiro e do numero de palavras
  if(selectedLevel === "1"){
    tam = 11;
    wordSize = 4;
  }else if(selectedLevel === "2"){
    tam = 12;
    wordSize = 5;
  }else if(selectedLevel === "3"){
    tam = 13;
    wordSize = 6;
  }

  /*Palavras random*/
  selectWords = randomWords(selectWords,wordSize);
  
  //Inicialização do Board
  board = StartBoard(tam,LETTER,selectWords);

  /*Game Setup -> Regras de posicionamento das palavras na função*/
  gameSetup(tam,board,selectWords,wordSize);
  

  return (
    <div id="container">
      <React.StrictMode>
          <Header/>
          <div id="gameSection">
            <SelectGame   
                gameStarted={gameStarted}
                onGameStart={handleGameStart}
                onLevelChange={handleLevelChange}
                selectedLevel={selectedLevel}
              />
          </div>
          <GameComponents
            gameStarted = {gameStarted}
            board = {board}
            words = {selectWords}
            selectedLevel = {selectedLevel}
          />
          <Footer />
      </React.StrictMode>
    </div>

  );
}

export default App;