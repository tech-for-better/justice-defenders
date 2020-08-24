import React from "react";
import { useParams } from "react-router-dom";

import { CardContainer, Icon, Title } from "./Card.style";
import { Links } from "../Styles/Typography";

const Card = ({ title, id, icon, dataCy }) => {
  const params = useParams();

  const url = !params.module
    ? `/${params.year}/${id}`
    : !params.subtopic
    ? `/${params.year}/${params.module}/${id}`
    : `/${params.year}/${params.module}/${params.subtopic}/${id}`;

  return (
    <Links data-cy={dataCy} to={url}>
      <CardContainer>
        <Title>{title}</Title>
        {icon && <Icon src={icon} />}
      </CardContainer>
    </Links>
  );
};

export default Card;
