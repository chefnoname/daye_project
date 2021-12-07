import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import TamponCards from "../TamponCards/TamponCards";

import "./TamponCarousel.css";

const TamponCarousel = () => {
  const [tamponArr, setTamponArr] = useState([]);
  useEffect(() => {
    const TamponObj = async () => {
      const res = await fetch("https://front-end-test-bvhzjr6b6a-uc.a.run.app");
      const data = await res.json();

      //MOVE THIS FUNCTION INTO AN EXTERNAL OUTSIDE OF REACT COMPONENT

      data.map((tampon) => {
        // rename all object keys to tampon
        if (tampon.tapons) {
          tampon.tampons = tampon.tapons;
          delete tampon.tapons;
        }

        //convert XML into JSON
        if (typeof tampon.tampons === "string") {
          let parseString = require("xml2js").parseString;
          let xml = tampon.tampons;
          parseString(xml, function (err, result) {
            // console.log(result, "this is the xml");
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

      setTamponArr(data);
    };

    TamponObj();
  }, []);

  console.log(tamponArr);

  return (
    <>
      <div className="container">
        <div className="leftHalf">
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              width: "300px",
              p: 5,
              fontWeight: "bold",
            }}
          >
            Subscribe to Daye tampons
          </Typography>
        </div>
        <div className="rightHalf">
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              width: "300px",
              p: 5,
              fontWeight: "bold",
              // position: "absolute",
            }}
          >
            in stock
          </Typography>
          <div className="tamponCards">
            {tamponArr.map((tampon, i) => (
              <TamponCards
                price={tampon.price}
                tampons={tampon.tampons}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TamponCarousel;
