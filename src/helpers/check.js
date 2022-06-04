let counter = 0;
let saveWordsClick = [];

export default function checkWords(selectWords,path,id){
    let element = document.getElementById(id)
    
    if(element.style.backgroundColor === "rgb(61, 167, 67)"){
        element.style.backgroundColor = "white"
        element.style.color =  "gray"
    }else{
        element.style.backgroundColor = "rgb(61, 167, 67)"
        element.style.color =  "white"
    }

    if(path === 1){
        counter++;
    }
    console.log(counter);
}