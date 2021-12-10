import TamponCard from "../TamponCard/TamponCard";
import "./TamponCardContainer.css";

const TamponCardContainer = ({ tamponBoxs }) => {
  const { currency, price, productImage, tampons } = tamponBoxs;
  return (
    <>
      <div className="tamponCardContainer">
        <div className="tamponHeader">
          <div className="tamponPic">
            <img src={productImage} alt="" />
          </div>
          <div className="sizingInfo">
            <p>
              {currency === "GBP" ? "£" : ""}
              {price}
            </p>
            <p>{tampons[0].size}</p>
          </div>
        </div>

        <div className="coatingInfo">
          {tampons.map((tampon, i) => (
            <TamponCard tampon={tampon} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TamponCardContainer;
