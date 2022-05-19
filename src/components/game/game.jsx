import React from "react";
import "./game.css"

function BoardButton(letter){
    return(
        <button className="buttonBoard">{letter}</button>
    )
}
function Board(props){
    const {tam,use} = props
    console.log("teste");

    let letter = "a"
    return(
        BoardButton(letter)
    )
}

export default Board;