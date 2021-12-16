import { useState, useEffect } from "react";
import TamponCardContainer from "../TamponCardContainer/TamponCardContainer";

import "./TamponBody.css";

const TamponBody = () => {
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

  return (
    <div>
      <div className="rightHalf">
        <h1>in stock</h1>

        <div className="tamponCards">
          {tamponArr.map((tampons, i) => (
            <TamponCardContainer tamponBoxs={tampons} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TamponBody;
