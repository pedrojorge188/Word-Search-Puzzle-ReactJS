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
        DIRECTION
} from "./constants/index"

function randomNumber(number){
  let rand = Math.floor(Math.random() * number)
  return rand;
}

function randomWords(selectWords,wordSize){
  let random = randomNumber(25-wordSize);

  selectWords = WORDS.slice(random,random+wordSize); //Para Alterar

  return selectWords
}

function StartBoard(tam,letter){
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
  let wordLength = selectWord[wordNumber].length;
  let extraRand ;

  do{
    extraRand = randomNumber(tam);
    posX = extraRand;
    posY = extraRand;
  }while(posX+wordLength>tam)

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY][posX + i] = <button className="boardButton" >{selectWord[wordNumber][i]}</button>
  }
}

function vertical(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand ;

  do{
    extraRand = randomNumber(tam);
    posX = extraRand;
    posY = extraRand;
  }while(posY+wordLength>tam)

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY + i][posX] = <button className="boardButton">{selectWord[wordNumber][i]}</button>
  }
  
}

function diagonal(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand ;

  do{
    extraRand = randomNumber(tam);
    posX = extraRand;
    posY = extraRand;
  }while(posY+wordLength>tam || posX+wordLength>tam)

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY + i][posX + i] = <button className="boardButton">{selectWord[wordNumber][i]}</button>
  }
}

function reverseString(str) {

  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

function selectDirection(direction,randomPosition,board,selectWord,tam,wordNumber){
  let inverseWord = []
  if(direction === "horizontal"){
    horizontal(board,randomPosition,randomPosition,selectWord,wordNumber,tam)
  }else if(direction === "horizontalBack"){
    inverseWord[wordNumber] = reverseString(selectWord[wordNumber])
    horizontal(board,randomPosition,randomPosition,inverseWord,wordNumber,tam)
  }else if(direction === "vertical"){
    vertical(board,randomPosition,randomPosition,selectWord,wordNumber,tam)
  }else if(direction === "verticalUp"){
    inverseWord[wordNumber] = reverseString(selectWord[wordNumber])
    vertical(board,randomPosition,randomPosition,inverseWord,wordNumber,tam)
  }else if(direction === "diagonal"){
    diagonal(board,randomPosition,randomPosition,selectWord,wordNumber,tam)
  }else if(direction === "inverseDiagonal"){
    inverseWord[wordNumber] = reverseString(selectWord[wordNumber])
    diagonal(board,randomPosition,randomPosition,inverseWord,wordNumber,tam);
  }
}

function gameSetup(tam,board,selectWord,wordSize){
    let  randomPosition , randomDirection
    randomPosition = randomNumber(tam)

    if(tam > 0){
      for(let i=0;i<wordSize;i++){
        randomPosition = randomNumber(tam)
        randomDirection = DIRECTION[randomNumber(6)]
  
       selectDirection(randomDirection,randomPosition,board,selectWord,tam,i,wordSize);
      }
    }
}

function App() {
  /*Variaveis utilizadas no scop*/
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
  board = StartBoard(tam,LETTER);

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