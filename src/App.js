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
function randomWords(selectWords){
  let random = randomNumber(19);

  selectWords = WORDS.slice(random,random+6); //Para Alterar

  return selectWords
}
function verifyBoardSize(selectedLevel){ 
  /*Função responsavel por verificar a dimensão do tabuleiro conforme a dificuldade escolhida pelo utilizador*/
  let tam = []
  if(selectedLevel === "1"){
    tam = 80; //10 linhas, 8 colunas
  }else if(selectedLevel === "2"){
    tam = 100; //10 linhas , 10 colunas
  }else if(selectedLevel === "3"){
    tam = 120; //12 linhas , 10 colunas
  }
  return tam;
}


function StartBoard(tam,letter,selectWord){
  let board = []
  let arrSize = []
  let space = 0;
  let b, a, c = 0;

  

  for(let i = 0;i<tam;i++){
    let rand = letter[randomNumber(25)]; // Escolhe uma letra random do array de letras
    board.push(<p className="boardButton" >{rand}</p>)
<<<<<<< HEAD

  } 

/*  for(let i = 0; i<6; i++){
    size += arrSize[i]; //Espaço ocupado por palavras
  }
  rSize = tam - size;  //Espaço restante

  for(let i = 0; i<6; i++){
    c = randomNumber(10);
    space += c;
    for(b = 0, a = 0; b<arrSize[i]; b++, a++){
=======
  } 


  for(let i = 0; i<6; i++){
    for(b = 0, a = 0; b<selectWord[i].length; b++, a++){
>>>>>>> 1019d4c1c71f4c81f9fd7946c6084f3041ba1359
      board[space + a] = <button className="boardButton" >{selectWord[i][b]}</button>
    }
    space += a;
  } 
<<<<<<< HEAD
*/


=======
  
>>>>>>> 1019d4c1c71f4c81f9fd7946c6084f3041ba1359
  return board;
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