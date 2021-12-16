import AOS from "aos";
import "aos/dist/aos.css";
import { WiRaindrop } from "react-icons/wi";

import "./TamponAmount.css";
const TamponAmount = ({ tampon }) => {
  const { coating, amount } = tampon;
  AOS.init();
  return (
    <div className="tamponAmount" data-aos="zoom-in">
      <p>
        <strong> {amount} </strong> <span>X </span>
        {coating === "none" ? "Normal" : "CBD"} Tampons
        {coating !== "none" && (
          <span className="raindrop">
            <WiRaindrop />
          </span>
        )}
      </p>
    </div>
  );
};

export default TamponAmount;
