import "./Symbols.scss";

const Symbols = (props) => {
  const isNumber = !isNaN(props.number);
  let cardContent;
  if (props.number === "A") {
    cardContent = <div className="qty">{props.symbol}</div>;
  }
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

export default Symbols;
