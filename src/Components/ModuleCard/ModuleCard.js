import React from "react";
import { ModuleContainer } from "./ModuleCard.style";
import { useHistory } from "react-router-dom";

const ModuleCard = ({ title, id }) => {
  const history = useHistory();

  const handleModuleClick = (event) => {
    const moduleUrl = title.toLowerCase().split(" ").join("-");
    history.push(`year1/${moduleUrl}`);
    console.log(id);
  };

  return (
    <>
      <ModuleContainer onClick={handleModuleClick}>
        <h4>{title}</h4>
      </ModuleContainer>
    </>
  );
};

export default ModuleCard;
