import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./Deck.scss";

const Deck = (props) => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    (async () => {
      let cards = await (
        await fetch(`http://localhost:3000/${props.path}`)
      ).json();
      setDeck({ cards });
    })();
  }, [props.path]);

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

export default Deck;
