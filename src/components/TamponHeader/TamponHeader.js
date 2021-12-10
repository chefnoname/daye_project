import { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import TamponCardContainer from "../TamponCardContainer/TamponCardContainer";
import dayeLogo from "../../assets/daye_logo.png";
import "./TamponHeader.css";

const TamponHeader = () => {
  const [tamponArr, setTamponArr] = useState([]);

  useEffect(() => {
    const getTamponObj = async () => {
      const res = await fetch("https://front-end-test-bvhzjr6b6a-uc.a.run.app");
      const data = await res.json();

      let initializedData = initializeData(data);
      setTamponArr(initializedData);
    };

    getTamponObj();
  }, []);

  const initializeData = (obj) => {
    let initializedData = obj.map((tampon) => {
      // rename object keys from tapons to tampons
      if (tampon.tapons) {
        tampon.tampons = tampon.tapons;
        delete tampon.tapons;
      }

      //convert XML into JSON
      if (typeof tampon.tampons === "string") {
        let parseString = require("xml2js").parseString;
        let xml = tampon.tampons;
        parseString(xml, function (err, result) {
          let newTamponArr = result.tapons.tampon.map((tampon) => ({
            amount: Number(tampon.amount[0]),
            coating: tampon.coating[0],
            size: tampon.size[0],
          }));
          tampon.tampons = newTamponArr;
        });
      }
      return tampon;
    });
    return initializedData;
  };

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
        <div className="rightHalf">
          <h1>in stock</h1>

          <div className="tamponCards">
            {tamponArr.map((tampons, i) => (
              <TamponCardContainer tamponBoxs={tampons} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TamponHeader;
