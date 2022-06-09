import randomNumber from "./randNum";
import checkOut from "./checker";

function horizontal(board, posY, posX, selectWord, wordNumber,tam,id){
  let wordLength = selectWord[wordNumber].length;
  let extraRand;

    do{

      extraRand = randomNumber(tam);
      posX = extraRand;
      posY = extraRand;
      


    }while(posX+wordLength>tam || isNaN(board[posY][posX].props.id) === true);
    

  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY][posX + i] = <p className={id} onClick={()=>checkOut(selectWord,wordNumber,id,tam)} id={id}>{selectWord[wordNumber][i]}</p>
  }
  
}

function vertical(board, posY, posX, selectWord, wordNumber,tam,id){
  let wordLength = selectWord[wordNumber].length;
  let extraRand ;

    do{
        extraRand = randomNumber(tam);
        posX = extraRand;
        posY = extraRand;
        
    }while(posX+wordLength>tam || isNaN(board[posY][posX].props.id) === true)


    for(let i=0; i<selectWord[wordNumber].length; i++){
      board[posY + i][posX] = <p className={id} onClick={()=>checkOut(selectWord,wordNumber,id,tam)}  id={id}>{selectWord[wordNumber][i]}</p>
    }
  
  }

  function diagonal(board, posY, posX, selectWord, wordNumber,tam,id){


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
        board[posY + i][posX + i] = <p className={id} onClick={()=>checkOut(selectWord,wordNumber,id,tam)} id={id}>{selectWord[wordNumber][i]}</p>
      }
  }
  
  function reverseString(str) {
  
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  }

  function verifyWordID(wordNumber){

    let id;

    if(wordNumber === 0){
      id = 'A';
    }else if(wordNumber === 1){
      id = 'B'
    }else if(wordNumber === 2){
      id = 'C'
    }else if(wordNumber === 3){
      id = 'D'
    }else if(wordNumber === 4){
      id = 'E'
    }else{
      id = 'F'
    }

    return id;
  }

  export default function selectDirection(randomPosition,board,selectWord,tam,wordNumber){
    let inverseWord = []
    let randomDirection;
    let wordSize = selectWord[wordNumber].length
    let id;

    randomDirection = randomNumber(4);
    id = verifyWordID(wordNumber);
  
    if(wordNumber === 2){
      
      if(wordSize > 5){
        horizontal(board,randomPosition,randomPosition,selectWord,wordNumber,tam,id);
      }else{
        diagonal(board,randomPosition,randomPosition,selectWord,wordNumber,tam,id);
      }

    }else{

      if(randomNumber === 0){ horizontal(board,randomPosition,randomPosition,selectWord,wordNumber,tam,id); }
      else if(randomNumber === 1){  vertical(board,randomPosition,randomPosition,selectWord,wordNumber,tam,id); }
      else if(randomNumber === 2){  inverseWord[wordNumber] = reverseString(selectWord[wordNumber]); vertical(board,randomPosition,randomPosition,inverseWord,wordNumber,tam,id); }
      else { inverseWord[wordNumber] = reverseString(selectWord[wordNumber]); horizontal(board,randomPosition,randomPosition,inverseWord,wordNumber,tam,id); }

    }

  }