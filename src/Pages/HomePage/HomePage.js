import React from "react";

// components
import Navbar from "../../Components/Navbar/Navbar";
import { PageWrapper } from "../../Components/Styles/Containers";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <h1>Home Page</h1>
      </PageWrapper>
    </>
  );
};

export default HomePage;
