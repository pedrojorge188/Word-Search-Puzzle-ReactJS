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
        WORDS
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
  let tam = 0;

  if(selectedLevel === "1"){
    tam = 80;
  }else if(selectedLevel === "2"){
    tam = 100;
  }else if(selectedLevel === "3"){
    tam = 120;
  }
  return tam;
}

function StartBoard(tam,letter,selectWord,freeWord){
  let board = []
  let arrSize = []

  for(let i=0;i<6;i++){
    arrSize[i] = freeWord[i].length
  }
  
  console.log(freeWord[0][2])

  for(let i = 0;i<tam;i++){
    
    let rand = letter[randomNumber(25)]; // Escolhe uma letra random do array de letras
    board.push(<p className="boardButton" >{rand}</p>)

  } 
  
  board[0] = <button className="boardButton" >{selectWord[0][0]}</button>
  board[1] = <p className="boardButton">{arrSize[0]}</p>

  return board;
}

function App() {
  /*Variaveis utilizadas no scop*/
  let tam;
  let board = [];
  let freeWord = [];
  let selectWords = []
  let helper;
  let trueTime;

  /*Counter to end game   --- action js
  trueTime = setTimeout(()=>{

  })*/

  /*Palavras random*/
  selectWords = randomWords(selectWords);

  /*Separar Palavras*/
  for(let j = 0;j<6;j++){
    helper = new String(selectWords[j]) 
    freeWord[j] = helper.split("");
  }
  
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
  board = StartBoard(tam,LETTER,selectWords,freeWord);

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