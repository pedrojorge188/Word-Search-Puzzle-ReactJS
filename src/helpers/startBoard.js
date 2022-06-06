import randomNumber from "./randNum";


export default function StartBoard(tam,letter,selectWords){
    let board = new Array(tam);
    for(let i=0;i<board.length;i++){
      board[i] = new Array(tam);
    }
  
    for(let i=0;i<tam;i++){
      for(let j=0;j<tam;j++){
        let rand = letter[randomNumber(25)]; // Escolhe uma letra random do array de letras
        board[i][j] = <p className="boardButton" id={i*i}>{rand}</p>
      }
    }
    return board;
}