import React from "react";

// components
import Navbar from "../../Components/Navbars/Navbar";
import ExternalLink from "../../Components/ExternalLink/ExternalLink";

// styles
import { MainTitle } from "../../Components/Styles/Typography";
import { PageWrapper } from "../../Components/Styles/Containers";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <MainTitle>
          Welcome to the Justice Defenders LLB learning platform!
        </MainTitle>
        <ExternalLink
          href={"https://www.justice-defenders.org/"}
          textContent={"Visit Justice Defenders website →"}
        />
      </PageWrapper>
    </>
  );
};

export default HomePage;
