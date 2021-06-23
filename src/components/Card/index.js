import { useState } from "react";
import Symbols from "../Symbols";
import "./Card.scss";

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

export default Card;
