export let points = 0;

let idA = 0, idB = 0, idC = 0, idD = 0, idE = 0;
let idF = 0;

export default function checkOut(selectWord,wordNumber,id){

  let wordSize = selectWord[wordNumber].length
  let strSize = selectWord.length;
  if(isNaN(id) === true){

      if(id === 'A'){
  
        idA++;
  
        if(idA === wordSize){
  
          for(let i=0;i<wordSize;i++){
              document.querySelectorAll(".A")[i].style.backgroundColor = 'red';
              document.querySelectorAll(".A")[i].style.color = 'white';
          }
          
          document.getElementById("wordA").style.backgroundColor = 'red';
          document.getElementById("wordA").style.color = 'white';
          points++;
          
        } 
  
      }else if(id === 'B'){
        idB++;
        if(idB === wordSize){
          for(let i=0;i<wordSize;i++){
              document.querySelectorAll(".B")[i].style.backgroundColor = 'green';
              document.querySelectorAll(".B")[i].style.color = 'white';
          }
          document.getElementById("wordB").style.backgroundColor = 'green';
          document.getElementById("wordB").style.color = 'white';
          points++;
          
        } 
      }else if(id === 'C'){
          idC++;
          if(idC === wordSize){
              for(let i=0;i<wordSize;i++){
                  document.querySelectorAll(".C")[i].style.backgroundColor = 'purple';
                  document.querySelectorAll(".C")[i].style.color = 'white';
              }
            document.getElementById("wordC").style.backgroundColor = 'purple';
            document.getElementById("wordC").style.color = 'white';
            points++;
            
          } 
      }else if(id === 'D'){
          idD++;
          if(idD === wordSize){
              for(let i=0;i<wordSize;i++){
                  document.querySelectorAll(".D")[i].style.backgroundColor = 'orange';
                  document.querySelectorAll(".D")[i].style.color = 'white';
              }
            document.getElementById("wordD").style.backgroundColor = 'orange';
            document.getElementById("wordD").style.color = 'white';
            points++;
            
          } 
      }else if(id === 'E'){
          idE++;
          if(idE === wordSize){
              for(let i=0;i<wordSize;i++){
                  document.querySelectorAll(".E")[i].style.backgroundColor = 'blue';
                  document.querySelectorAll(".E")[i].style.color = 'white';
              }
              document.getElementById("wordE").style.backgroundColor = 'blue';
              document.getElementById("wordE").style.color = 'white';
              points++;
              
          } 
      }else if(id === 'F'){
          idF++;
  
          if(idF === wordSize){
              for(let i=0;i<wordSize;i++){
                  document.querySelectorAll(".F")[i].style.backgroundColor = 'yellow';
                  document.querySelectorAll(".F")[i].style.color = 'black';
              }
              document.getElementById("wordF").style.backgroundColor = 'yellow';
              document.getElementById("wordF").style.color = 'black';
              points++;
          } 
      }
    }
    
}