import { useState } from "react";
import "./TamponCard.css";

const TamponCard = ({ price, tampon }) => {
  const { coating, size, amount } = tampon;
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const decrementCounter = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="cardContainer">
      <div className="typeOfTampon">
        <div className="coating">{coating === "none" ? "No CBD" : coating}</div>
        <div className="size">{size}</div>
        <div className="price">£{price}</div>
      </div>
      <div className="counter">
        <button onClick={decrementCounter} disabled={counter === 0}>
          -
        </button>
        {counter}
        <button onClick={incrementCounter} disabled={amount === counter}>
          +
        </button>
        {counter === amount ? <span>Sorry! This item has run out!</span> : null}
      </div>
    </div>
  );
};

export default TamponCard;
