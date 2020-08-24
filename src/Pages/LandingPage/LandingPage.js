import React from "react";
import { useHistory } from "react-router-dom";
import { FullScreenSection } from "../../Components/Styles/Containers";

const LandingPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <>
      <FullScreenSection>
        <h1>Justice Defenders</h1>
        <button onClick={() => handleClick()}>Log In</button>
      </FullScreenSection>
    </>
  );
};

export default LandingPage;
