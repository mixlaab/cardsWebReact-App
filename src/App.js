import React, { useState, useEffect } from "react";
import "./App.css";

const Symbols = (props) => {
  const isNumber = !isNaN(props.number);
  let cardContent;
  if (isNumber) {
    cardContent = new Array(parseInt(props.number))
      .fill(props.symbol)
      .map((cardSymbol, index) => (
        <div key={index} className="qty">
          {cardSymbol}
        </div>
      ));
  }
  return <div className="symbols">{cardContent}</div>;
};

const Card = (props) => {
  const [cardFace, setCardFace] = useState(props.flipped);

  return (
    <div
      onClick={() => setCardFace(!cardFace)}
      className={cardFace ? "card flipped" : "card"}
      number={props.number}
      symbol={props.symbol}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-corner top-left">
            <div>{props.number}</div>
            <div>{props.symbol}</div>
          </div>
          <Symbols number={props.number} symbol={props.symbol} />
          <div className="card-corner bottom-right">
            <div>{props.number}</div>
            <div>{props.symbol}</div>
          </div>
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

const Deck = (props) => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    (async () => {
      let cards = await (
        await fetch(`http://localhost:3000/${props.path}`)
      ).json();
      setDeck({ cards });
    })();
  });

  return (
    <div>
      {deck.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{props.title}</h2>
          <div className={props.title}>
            {deck.cards.map((card, index) => {
              const number = card.slice(0, -1);
              const symbol = card.slice(-1);
              return (
                <Card
                  key={index}
                  number={number}
                  symbol={symbol}
                  flipped={index < props.flipped}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

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
