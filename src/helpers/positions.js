import randomNumber from "./randNum";

function horizontal(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand;
  let next;

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
        if(board[posY][posX + i].props.id !== "btn"){
          valid = 1;
        }else{
          valid = 0;
        }
      }

    }while(valid === 0)


  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY][posX + i] = <button className="boardButton" id="btn">{selectWord[wordNumber][i]}</button>
  }
  
}
function vertical(board, posY, posX, selectWord, wordNumber,tam){
  let wordLength = selectWord[wordNumber].length;
  let extraRand ;

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
        if(board[posY + i][posX].props.id !== "btn"){
          valid = 1;
        }else{
          valid = 0;
        }
      }

    }while(valid === 0)


  for(let i=0; i<selectWord[wordNumber].length; i++){
    board[posY + i][posX] = <button className="boardButton" id="btn">{selectWord[wordNumber][i]}</button>
  }
  
  }
  
  function diagonal(board, posY, posX, selectWord, wordNumber,tam){
    let wordLength = selectWord[wordNumber].length;
    let extraRand ;
    let valid = 0;
    let randStandX,randStandY;

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
        if(board[posY  + i ][posX + i].props.id !== "btn"){
          valid = 1;
        }else{
          valid = 0;
        }
      }

    }while(valid === 0)
  
    for(let i=0; i<selectWord[wordNumber].length; i++){
      board[posY + i][posX + i] = <button className="boardButton" id="btn">{selectWord[wordNumber][i]}</button>
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