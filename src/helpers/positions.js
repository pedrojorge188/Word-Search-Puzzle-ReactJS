import randomNumber from "./randNum";


function horizontal(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand;

    do{

      extraRand = randomNumber(tam);
      posX = extraRand;
      posY = extraRand;
      


    }while(posX+wordLength>tam || isNaN(board[posY][posX].props.id) === true);
    

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY][posX + i] = <button className="boardButton" id={selectWord[wordNumber][i]}>{selectWord[wordNumber][i]}</button>
  }
  
}

function vertical(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand ;

    do{
        extraRand = randomNumber(tam);
        posX = extraRand;
        posY = extraRand;
        
    }while(posX+wordLength>tam || isNaN(board[posY][posX].props.id) === true)


    for(let i=0; i<selectWord[wordNumber].length; i++){
      board[posY + i][posX] = <button className="boardButton" id={selectWord[wordNumber][i]}>{selectWord[wordNumber][i]}</button>
    }
  
  }

  /*function runDiagonal(board, posY, posX, wordLength){

    for(let i=0;i<=wordLength;i++){
      if(isNaN(board[posY + i][posX + i].props.id) === true){
        return false;
      } 
    }

    return true;
  }*/

  function diagonal(board, posY, posX, selectWord, wordNumber,tam){


    let wordLength = selectWord[wordNumber].length;
    let extraRand ;
    let randStandX,randStandY;

    
      do{
         
            extraRand = randomNumber(tam);
            randStandX = randomNumber(5);
            randStandY = randomNumber(5);
    
            posX = extraRand+randStandX;
            posY = extraRand+randStandY;

      }while(posX+wordLength>tam || posY+wordLength>tam || 
        (isNaN(board[posY][posX].props.id) === true || isNaN(board[posY+(wordLength-1)][posX+(wordLength-1)].props.id) === true) ||
        (isNaN(board[posY+(wordLength-2)][posX+(wordLength-2)].props.id) === true || isNaN(board[posY+(wordLength-3)][posX+(wordLength-3)].props.id) === true) ||
        (isNaN(board[posY+(wordLength-4)][posX+(wordLength-4)].props.id) === true))


      for(let i=0; i<selectWord[wordNumber].length; i++){
        board[posY + i][posX + i] = <button className="boardButton" id={selectWord[wordNumber][i]}>{selectWord[wordNumber][i]}</button>
      }
  }
  
  function reverseString(str) {
  
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  }
  
  export default function selectDirection(DIRECTION,randomPosition,board,selectWord,tam,wordNumber){

    let inverseWord = []

    if(selectWord.length === 4){
      if(wordNumber === 0){
        horizontal(board,randomPosition,randomPosition,selectWord,0,tam);
      }else if(wordNumber === 1){
        vertical(board,randomPosition,randomPosition,selectWord,1,tam);
      }else if(wordNumber === 2){
        horizontal(board,randomPosition,randomPosition,selectWord,2,tam);
      }else if(wordNumber === 3){
        if(selectWord[wordNumber].length > 5){
          horizontal(board,randomPosition,randomPosition,selectWord,3,tam);
        }else{
          diagonal(board,randomPosition,randomPosition,selectWord,3,tam);
        }
      }
    }else if(selectWord.length === 5){
      if(wordNumber === 0){
        horizontal(board,randomPosition,randomPosition,selectWord,0,tam);
      }else if(wordNumber === 1){
        vertical(board,randomPosition,randomPosition,selectWord,1,tam);
      }else if(wordNumber === 2){
        horizontal(board,randomPosition,randomPosition,selectWord,2,tam);
      }else if(wordNumber === 3){
        horizontal(board,randomPosition,randomPosition,selectWord,3,tam);
      }else if(wordNumber === 4){
        vertical(board,randomPosition,randomPosition,selectWord,4,tam);
      }
    }else if(selectWord.length === 6){
      if(wordNumber === 0){
        horizontal(board,randomPosition,randomPosition,selectWord,0,tam);
      }else if(wordNumber === 1){
        vertical(board,randomPosition,randomPosition,selectWord,1,tam);
      }else if(wordNumber === 2){
        horizontal(board,randomPosition,randomPosition,selectWord,2,tam);
      }else if(wordNumber === 3){
        horizontal(board,randomPosition,randomPosition,selectWord,3,tam);
      }else if(wordNumber === 4){
        vertical(board,randomPosition,randomPosition,selectWord,4,tam);
      }else if(wordNumber === 5){
        vertical(board,randomPosition,randomPosition,selectWord,5,tam);
      }
    }
    
    /*
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
      diagonal(board,randomPosition,randomPosition,inverseWord,wordNumber,tam)
    }
    */


    //diagonal(board,randomPosition,randomPosition,selectWord,wordNumber,tam)
    //vertical(board,randomPosition,randomPosition,selectWord,wordNumber,tam)
  }