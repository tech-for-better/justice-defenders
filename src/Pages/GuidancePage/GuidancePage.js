import React from "react";
import { useHistory } from "react-router-dom";

const GuidancePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/year1");
  };

  return (
    <>
      <h1>Extra guidance </h1>
      <button onClick={() => handleClick()}>Go back to year one page</button>
    </>
  );
};

export default GuidancePage;
