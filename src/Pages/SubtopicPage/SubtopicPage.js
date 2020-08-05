import React from "react";
// import { useParams } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
// import HelpCard from "../../Components/HelpCard/HelpCard";

// // styles
// import { CardsContainer } from "../Year/YearPage.style";
// import {
//   IntroSection,
//   Header,
//   PageWrapper,
// } from "../../Components/Styles/Containers";
// import { Text, Heading } from "../../Components/Styles/Typography";

const SubtopicPage = () => {
  // const params = useParams();

  // const yearCollection = params.year;
  // const moduleCollection = `${yearCollection}-${params.module}`
  // const moduleCollection = `${yearCollection}-${params.module}`

  return (
    <>
      <Navbar />
      <h1>Subtopic</h1>
      {/* <PageWrapper>
            <Header>
              <Heading>{moduleInfo.title}</Heading>
            </Header>
            <IntroSection>
              <Text>{moduleInfo.intro}</Text>
              <HelpCard help={moduleInfo.help} />
            </IntroSection>
            <CardsContainer>
              {subtopicCards(moduleSubtopics)}
            </CardsContainer>
          </PageWrapper> */}
    </>
  );
};
export default SubtopicPage;
