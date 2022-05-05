import "./assets/styles/App.css";
import React from "react";
import {Footer} from "./components/route"

function App() {
  return (
    <div id="container">
      <React.StrictMode>
        <Footer />
      </React.StrictMode>
    </div>

  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {
