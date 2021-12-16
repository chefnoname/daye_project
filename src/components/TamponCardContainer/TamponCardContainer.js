import AOS from "aos";
import TamponAmount from "../TamponAmount/TamponAmount";
import "./TamponCardContainer.css";

const TamponCardContainer = ({ tamponBoxs }) => {
  const { currency, price, productImage, tampons } = tamponBoxs;

  AOS.init();

  return (
    <>
      <div className="tamponCardContainer" data-aos="flip-right">
        <div className="tamponHeader">
          <div className="sizingInfo">
            <p>
              {currency === "GBP" ? "£" : ""}
              {price}
            </p>
            <p>
              size: <strong>{tampons[0].size}</strong>
            </p>
          </div>

          <div className="tamponPic">
            <img src={productImage} alt="" />
          </div>
        </div>

        <div className="rightSideOfCard">
          <p>This pack includes:</p>
          <div className="tamponInfo">
            {tampons.map((tampon, i) => (
              <TamponAmount tampon={tampon} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TamponCardContainer;
