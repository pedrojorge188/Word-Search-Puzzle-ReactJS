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
      // DIRECTION
} from "./constants/index"

function randomNumber(number){
  let rand = Math.floor(Math.random() * number)
  return rand;
}
function randomWords(selectWords){
  let random = randomNumber(19);

  selectWords = WORDS.slice(random,random+6); //Para Alterar

  return selectWords
}
function verifyBoardSize(selectedLevel){ 
  /*Função responsavel por verificar a dimensão do tabuleiro conforme a dificuldade escolhida pelo utilizador*/
  let tam = []
  if(selectedLevel === "1"){
    tam = 11;
  }else if(selectedLevel === "2"){
    tam = 12;
  }else if(selectedLevel === "3"){
    tam = 13;
  }
  return tam;
}
function StartBoard(tam,letter,selectWord){
  let board = new Array(tam);
  for(let i=0;i<board.length;i++){
    board[i] = new Array(tam);
  }

  for(let i=0;i<tam;i++){
    for(let j=0;j<tam;j++){
      let rand = letter[randomNumber(25)]; // Escolhe uma letra random do array de letras
      board[i][j] = <p className="boardButton" >{rand}</p>
    }
  }
  return board;
}
function horizontal(board, posY, posX, selectWord, wordNumber,tam){
  let wordSize = selectWord[wordNumber].length;
  let extraRand ;

  do{
    extraRand = randomNumber(tam);
    posX = extraRand;
    posY = extraRand;
  }while(posX+wordSize>tam)

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY][posX + i] = <button className="boardButton" >{selectWord[wordNumber][i]}</button>
  }

  
}
function vertical(board, posY, posX, selectWord, wordNumber,tam){
  let wordSize = selectWord[wordNumber].length;
  let extraRand ;

  do{
    extraRand = randomNumber(tam);
    posX = extraRand;
    posY = extraRand;
  }while(posY+wordSize>tam)

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY + i][posX] = <button className="boardButton" >{selectWord[wordNumber][i]}</button>
  }
  
}

function diagonal(board, posY, posX, selectWord, wordNumber,tam){
  let wordSize = selectWord[wordNumber].length;
  let extraRand ;

  do{
    extraRand = randomNumber(tam);
    posX = extraRand;
    posY = extraRand;
  }while(posY+wordSize>tam || posX+wordSize>tam)

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY + i][posX + i] = <button className="boardButton" >{selectWord[wordNumber][i]}</button>
  }
  
}


function startSaveArray(tam,savePositions){
  for(let i=0;i<savePositions.length;i++){
    savePositions[i] = new Array(tam);
  }
  for(let i=0;i<tam;i++){
    for(let j=0;j<tam;j++){
      savePositions[i][j] = 0;
    }
  }
  
  return savePositions;
}
function gameSetup(tam,board,selectWord){
    let savePositions = new Array(tam);
    let random 
    savePositions = startSaveArray(tam,savePositions);
  

    random = randomNumber(tam)
    diagonal(board,random,random,selectWord,0,tam);

}
function App() {
  /*Variaveis utilizadas no scop*/
  let tam;
  let board = [];
  let selectWords = []

  /*Palavras random*/
  selectWords = randomWords(selectWords);
  
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

  /*Inicialização do tabuleiro*/
  tam = verifyBoardSize(selectedLevel);
  board = StartBoard(tam,LETTER,selectWords);

  /*Game Setup -> Regras de posicionamento das palavras na função*/
  gameSetup(tam,board,selectWords);

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