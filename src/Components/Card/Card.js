import React from "react";
import { CardContainer } from "./Card.style";
import { useParams } from "react-router-dom";

import { Links } from '../Styles/Typography'

const Card = ({ title, id }) => {
  const params = useParams();

  const url = !params.module
    ? `/${params.year}/${id}`
    : !params.subtopic ? `/${params.year}/${params.module}/${id}` : `/${params.year}/${params.module}/${params.subtopic}/${id}`

  return (
    <Links to={url}>
      <CardContainer>
        <h4>{title}</h4>
      </CardContainer>
    </Links>
  );
};

export default Card;
