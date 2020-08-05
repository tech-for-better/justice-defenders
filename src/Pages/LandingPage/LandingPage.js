import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <>
      <h1>Landing</h1>
      <button onClick={() => handleClick()}>Log In</button>
    </>
  );
};

export default LandingPage;
