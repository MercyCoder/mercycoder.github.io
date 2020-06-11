import React from "react";
import "./App.css";
import Developer from "./Developer";
import Writer from "./Writer";
import Player from "./Player";
import Linguist from "./Linguist";

function App() {
  return (
    <div>
      <div className="App">
        <div className="fade">
          <h1>MERCY</h1>
          <h1>ODHNER</h1>
        </div>
        <div id="dev" >
          <p>
            <Developer />
          </p>
        </div>
        <div id="writer">
          <p className="title">
            <Writer />
          </p>
        </div>
        <div id="player">
          <p className="title">
            <Player />
          </p>
        </div>
        <div id="linguist">
          <p className="title">
            <Linguist />
          </p>
          <div className="contact">
            <a className="contact" href="mailto:mercyeodhner.gmail.com">
              contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
