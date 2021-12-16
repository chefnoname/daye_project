import { AiFillCheckCircle } from "react-icons/ai";
import dayeLogo from "../../assets/daye_logo.png";
import "./TamponHeader.css";

const TamponHeader = () => {
  // Overkill

  const subscriptionBenefits = [
    [<AiFillCheckCircle />, `Choose the tampons you'd like`],
    [<AiFillCheckCircle />, `We sync with every cycle length`],
    [<AiFillCheckCircle />, `Modify, skip or cancel anytime`],
  ];

  return (
    <>
      <div className="container">
        <div className="leftHalf">
          <h1>Subscribe to Daye tampons</h1>
          <img src={dayeLogo} alt="" />

          <div className="subscriptionBenefits">
            {subscriptionBenefits.map(([checkIcon, text], i) => (
              <div className="subscriptionPoints" key={i * 10}>
                <span className="checkIcon">{checkIcon}</span>
                <span className="subscriptionDescription">
                  <h3>{text}</h3>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TamponHeader;
