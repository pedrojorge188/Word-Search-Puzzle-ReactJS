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
  
  export default function selectDirection(randomPosition,board,selectWord,tam,wordNumber){
    let inverseWord = []
    let randomDirection;
    let wordSize = selectWord[wordNumber].length


    randomDirection = randomNumber(4);

    if(wordNumber === 2){
      
      if(wordSize > 5){
            horizontal(board,randomPosition,randomPosition,selectWord,wordNumber,tam);
      }else{
        diagonal(board,randomPosition,randomPosition,selectWord,wordNumber,tam);
      }

    }else{

      if(randomNumber === 0){ horizontal(board,randomPosition,randomPosition,selectWord,wordNumber,tam); }
      else if(randomNumber === 1){  vertical(board,randomPosition,randomPosition,selectWord,wordNumber,tam); }
      else if(randomNumber === 2){  inverseWord[wordNumber] = reverseString(selectWord[wordNumber]); vertical(board,randomPosition,randomPosition,inverseWord,wordNumber,tam); }
      else { inverseWord[wordNumber] = reverseString(selectWord[wordNumber]); horizontal(board,randomPosition,randomPosition,inverseWord,wordNumber,tam); }

    }

  }