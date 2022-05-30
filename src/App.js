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

function StartBoard(tam,letter){
  let board = []
  for(let i = 0;i<tam;i++){

    let rand = letter[Math.floor(Math.random() * 25)]; // Escolhe uma letra random do array de letras

    board.push(<button className="boardButton" id={i}>{rand}</button>)
  }
  return board;
}

function App() {
  /*Variaveis utilizadas no scop*/
  let tam;
  let board = [];
  let freeWord = [];
  let helper;

  /*Variveis de estado responsaveis pela manipulação de dados de inicio e fim de jogo*/
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  
  const handleGameStart = () => {

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


  /*Palavras random*/
  const selectWords = []
  for(let i = 0;i<6;i++){
    let random = WORDS[Math.floor(Math.random() * 25)];

    if(selectWords.indexOf(random) === -1){
      selectWords[i] = random;
    }
  }
  
  /*Separar as palavras em caracteres "array" 
  for(let j = 0;j<6;j++){
    helper = selectWords[j]
    freeWord[j] = helper.split("");
  }
  console.log(freeWord)
 */

  
  /*Inicialização do tabuleiro*/
  tam = verifyBoardSize(selectedLevel);
  board = StartBoard(tam,LETTER);




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