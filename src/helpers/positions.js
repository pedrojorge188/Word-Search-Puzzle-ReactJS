import randomNumber from "./randNum";
import checkWords from "./check"


function horizontal(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand;
  let startId = 144;
  let valid = 0;


  while(valid === 0){

        do{
          extraRand = randomNumber(tam);
          posX = extraRand;
          posY = extraRand;
        }while(posX+wordLength>tam)

      for(let i=0;i<wordLength;i++){
        if(board[posY][posX + i].props.className !== "use"){
          valid = 1;

          for(let j=0; j<selectWord[wordNumber].length; j++){
            board[posY][posX + j] = <button className="boardButton use" id={startId+j} onClick={() => checkWords(selectWord,1,startId+j)}>{selectWord[wordNumber][j]}</button>
            
          }

        }else{
          valid = 0;
        }

      console.log(board)

    }
  }
    /*if(valid !== 0){
      for(let i=0; i<selectWord[wordNumber].length; i++){
        board[posY][posX + i] = <button className="boardButton use" id={startId+i} onClick={() => checkWords(selectWord,1,startId+i)}>{selectWord[wordNumber][i]}</button>
      }
    }*/

}
function vertical(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand ;
  let startId = 244;
  
  let valid = 0;


    do{

      if(valid === 0){

        do{
          extraRand = randomNumber(tam);
          posX = extraRand;
          posY = extraRand;
          
        }while(posX+wordLength>tam )
      }

      for(let i=0;i<wordLength;i++){
        if(board[posY + i][posX].props.className !== "use"){
          valid = 1;
        }else{
          valid = 0;
        }
      }

    }while(valid === 0)

    if(valid !== 0){
      for(let i=0; i<selectWord[wordNumber].length; i++){
        board[posY + i][posX] = <button className="boardButton  use" id={startId+i} onClick={() => checkWords(selectWord,1,startId+i)}>{selectWord[wordNumber][i]}</button>
      }
    }

  
  
  }
  
  function diagonal(board, posY, posX, selectWord, wordNumber,tam){
    let wordLength = selectWord[wordNumber].length;
    let extraRand ;
    let valid = 0;
    let randStandX,randStandY;
    let startId = 344;
    do{

      if(valid === 0){

        do{
          extraRand = randomNumber(tam);
          randStandX = randomNumber(5);
          randStandY = randomNumber(5);

          posX = extraRand+randStandX;
          posY = extraRand+randStandY;
          
        }while(posX+wordLength>tam || posY+wordLength>tam)
      }

      for(let i=0;i<wordLength;i++){
        if(board[posY  + i ][posX + i].props.className !== "use"){
          valid = 1;
        }else{
          valid = 0;
        }
      }

    }while(valid === 0)

    if(valid !== 0){
      for(let i=0; i<selectWord[wordNumber].length; i++){
        board[posY + i][posX + i] = <button className="boardButton  use" id={startId+i} onClick={() => checkWords(selectWord,1,startId+i)}>{selectWord[wordNumber][i]}</button>
      }
    }
    
  }
  function Adiagonal(board, posY, posX, selectWord, wordNumber,tam){
    let wordLength = selectWord[wordNumber].length;
    let extraRand ;
    let valid = 0;
    let randStandX,randStandY;
    let startId = 444

    do{

      if(valid === 0){

        do{
          extraRand = randomNumber(tam);
          randStandX = randomNumber(5);
          randStandY = randomNumber(5);

          posX = extraRand+randStandX;
          posY = extraRand+randStandY;
          
        }while(posX+wordLength>tam || posY+wordLength>tam)
      }

      for(let i=0;i<wordLength;i++){
        if(board[posX  + i ][posY + i].props.id !== "btn"){
          valid = 1;
        }else{
          valid = 0;
        }
      }

    }while(valid === 0)
  
    for(let i=0; i<selectWord[wordNumber].length; i++){
      board[posX + i][posY + i] = <button className="boardButton" id={startId+i} onClick={() => checkWords(selectWord,1,startId+i)}>{selectWord[wordNumber][i]}</button>
    }
  }
  function reverseString(str) {
  
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  }
  
  export default function selectDirection(direction,randomPosition,board,selectWord,tam,wordNumber){
    let inverseWord = []

    direction = "horizontal";

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
     Adiagonal(board,randomPosition,randomPosition,selectWord,wordNumber,tam);
    }

  }