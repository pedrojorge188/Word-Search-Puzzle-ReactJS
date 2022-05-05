import React from "react";
import "./select-game.css"

function SelectGame(){
    return(   
    <div className="select-menu">
      <select className="form-select" aria-label="Default select example">
        <option selected>Dificuldade</option>
        <option value={1}>Fácil</option>
        <option value={2}>Normal</option>
        <option value={3}>Avançado</option>
      </select>
      <button type="button" class="btn btn-outline-success play-button" id="play-button">Jogar</button>
    </div>

    )
    
}

export default SelectGame;