import { Typography } from "@mui/material";
import TamponCard from "../TamponCard/TamponCard";

import "./TamponCards.css";

const TamponCards = ({ price, tampons }) => {
  return (
    <>
      {tampons.map((tampon, i) => (
        <TamponCard price={price} tampon={tampon} key={i} />
      ))}
    </>
  );
};

export default TamponCards;
