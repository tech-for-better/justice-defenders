import React from "react";

import Navbar from "../../Components/Navbars/Navbar";

import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

const GuidancePage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Header>
          <Heading>{"Extra guidance"}</Heading>
        </Header>
        <IntroSection>
          <Text>{"Some extra guidance intro text"}</Text>
        </IntroSection>
      </PageWrapper>
    </>
  );
};

export default GuidancePage;
