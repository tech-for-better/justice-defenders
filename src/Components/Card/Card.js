import React from "react";
import { CardContainer } from "./Card.style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Card = ({ title, id }) => {
  const params = useParams();

  const url = !params.module
    ? `/${params.year}/${id}`
    : !params.subtopic ? `/${params.year}/${params.module}/${id}` : `/${params.year}/${params.module}/${params.subtopic}/${id}`

  return (
    <Link to={url}>
      <CardContainer>
        <h4>{title}</h4>
      </CardContainer>
    </Link>
  );
};

export default Card;
