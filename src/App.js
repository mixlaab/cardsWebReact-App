import React from "react";
import Deck from "./components/Deck";
import "./App.scss";
import "./components/Deck/Deck.scss";

function App() {
  return (
    <div>
      <header>
        <h1 className="article-title">Card.js</h1>
        <Deck title="Table" path="table" flipped="3" />
        <Deck title="Hand" path="deck/2" flipped="2" />
      </header>
    </div>
  );
}

export default App;
