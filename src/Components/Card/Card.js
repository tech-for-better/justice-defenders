import React from "react";
import { CardContainer } from "./Card.style";
import { useHistory } from "react-router-dom";

const Card = ({ title, id }) => {
  const history = useHistory();

  const handleModuleClick = (event) => {
    const module = title.toLowerCase().split(" ").join("-");
    const year = window.location.pathname.split("/")[1];
    history.push(`${year}/${module}`);
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
