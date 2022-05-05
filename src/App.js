import "./assets/styles/App.css";
import React from "react";
import Header from "./components/header/Header";

import {Footer} from "./components/route"
import {SelectGame} from "./components/route"

function App() {
  return (
    <div id="container">
      <React.StrictMode>
        <Header/>
        <SelectGame/>
        <Footer />
      </React.StrictMode>
    </div>

  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {
