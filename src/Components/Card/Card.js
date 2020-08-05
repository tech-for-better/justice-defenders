import React from "react";
import { CardContainer } from "./Card.style";
import { useHistory } from "react-router-dom";

const Card = ({ title, id }) => {
  const history = useHistory();

  const handleModuleClick = (event) => {
    const moduleUrl = title.toLowerCase().split(" ").join("-");
    history.push(`year1/${moduleUrl}`);
    console.log(id);
  };

  return (
    <>
      <CardContainer onClick={handleModuleClick}>
        <h4>{title}</h4>
      </CardContainer>
    </>
  );
};

export default Card;
