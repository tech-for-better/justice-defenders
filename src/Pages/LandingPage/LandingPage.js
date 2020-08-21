import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <>
      <section>
        <h1>Justice Defenders</h1>
        <button onClick={() => handleClick()}>Log In</button>
      </section>
    </>
  );
};

export default LandingPage;
