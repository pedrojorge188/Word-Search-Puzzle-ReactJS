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

function StartBoard(tam,letter,selectWord){
  let board = []
  let arrSize = []
  let size = 0;
  let rSize = 0;
  let space = 0;
  let b, a = 0;

  for(let i=0;i<6;i++){
    arrSize[i] = selectWord[i].length
  }
  

  for(let i = 0;i<tam;i++){
    
    let rand = letter[randomNumber(25)]; // Escolhe uma letra random do array de letras
    board.push(<button className="boardButton" >{rand}</button>)

  } 

  for(let i = 0; i<6; i++){
    size += arrSize[i]; //Espaço ocupado por palavras
  }
  rSize = tam - size;  //Espaço restante

    for(let i = 0; i<6; i++){
      for(b = 0, a = 0; b<arrSize[i]; b++, a++){
        board[space + a] = <button className="boardButton" >{selectWord[i][b]}</button>
      }
      space += a;
    } 
  
  console.log()
  //board[0] = <button className="boardButton" >{selectWord[0][0]}</button>
  //board[1] = <p className="boardButton">{arrSize[0]}</p>

  return board;
}

function App() {
  /*Variaveis utilizadas no scop*/
  let tam;
  let board = [];
  let selectWords = []
  let trueTime;

  /*Counter to end game   --- action js
  trueTime = setTimeout(()=>{

  })*/

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