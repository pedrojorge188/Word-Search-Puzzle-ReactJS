import React from "react"
import "./select-game.css"


function SelectGame(props){
    const { gameStarted, selectedLevel, 
          onGameStart, onLevelChange } = props;
    const gameStartedClass = gameStarted ? "gameStarted" : "" ;

    return(   
    <div className="select-menu">
      <select defaultValue="0" className="form-select" aria-label="Default select example" 
       onChange={onLevelChange}
       onClick={gameStarted}
       disabled={gameStarted===true}>

        <option   value="0">Dificuldade</option>
        <option value= "1">Fácil</option>
        <option value= "2">Normal</option>
        <option value= "3">Avançado</option>

      </select>
      <button type="button" className="btn btn-outline-success play-button" id="play-button"
      disabled={selectedLevel==="0"}
      onClick={onGameStart}>{gameStarted ? "Parar" : "Iniciar"}</button>
    </div>

    )
    
}

export default SelectGame;