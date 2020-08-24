import React from "react";

// components
import Navbar from "../../Components/Navbars/Navbar";
import { PageWrapper } from "../../Components/Styles/Containers";

import ExternalLink from "../../Components/ExternalLink/ExternalLink";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <h1>Home Page</h1>
        <ExternalLink
          href={"https://www.justice-defenders.org/"}
          textContent={"Visit Justice Defenders website."}
        />
      </PageWrapper>
    </>
  );
};

export default HomePage;
