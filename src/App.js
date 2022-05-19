import "./assets/styles/App.css";
import React from "react";
import {useState} from "react";

import {Header,
        Footer,
        SelectGame,
        Board
} from "./components/route"



function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const handleGameStart = () => {
    if(gameStarted){
      setGameStarted(false);
    }else{
      setGameStarted(true);
    }
  };

  const handleLevelChange = (event) => {
    const {value} = event.currentTarget;
    setSelectedLevel(value);
  }

  return (
    <div id="container">
      <React.StrictMode>
          <Header/>
          <div id="gameSection">
            <SelectGame   
                gameStarted={gameStarted}
                onGameStart={handleGameStart}
                onLevelChange={handleLevelChange}
                selectedLevel={selectedLevel}
              />
            <Board/>
          </div>
          
          <Footer />
      </React.StrictMode>
    </div>

  );
}

export default App;

