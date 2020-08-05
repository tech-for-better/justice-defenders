import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/year1");
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => handleClick()}>Go to year one page</button>
    </>
  );
};

export default HomePage;
