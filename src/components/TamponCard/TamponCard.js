import Alert from "@mui/material/Alert";
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
        <h3 className="coating">{coating === "none" ? "No CBD" : coating}</h3>
        <h3 className="size">{size}</h3>
        <h3 className="price">£{price}</h3>
      </div>
      <div className="counter">
        <button onClick={decrementCounter} disabled={counter === 0}>
          -
        </button>
        <span className="counterNumber">
          <h3>{counter}</h3>
        </span>
        <button onClick={incrementCounter} disabled={amount === counter}>
          +
        </button>
        <span className="alert">
          {counter === amount ? (
            <Alert
              severity="error"
              sx={{ transform: "scale(0.75)", fontSize: "16px" }}
              className="alertText"
            >
              Sorry! This item has run out!
            </Alert>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default TamponCard;
