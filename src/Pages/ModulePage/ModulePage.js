import React from "react";
// import firebase from "../../firebase";

import Navbar from "../../Components/Navbar/Navbar";
// import Card from "../../Components/Card/Card";
import HelpCard from "../../Components/HelpCard/HelpCard";

// styles
import { CardsContainer } from "../Year/YearPage.style";
import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

const ModulePage = (props) => {
  //     const [moduleSubtopics, setModuleSubtopics] = React.useState([])
  //     const [moduleInfo, setModuleInfo] = React.useState([])

  React.useEffect(() => {
    //   firebase
    //   .firestore()
    //   .collection("Year1")
    //   .doc("Year1_Module1")
    //   .get().then(console.log)
    //   .onSnapshot((snapshot) => {
    //       console.log(snapshot.fields)
    //     const subtopics = snapshot.collections.map((doc) =>
    //       doc.id === "Additional"
    //         ? setModuleInfo({ id: doc.id, ...doc.data() })
    //         : { id: doc.id, ...doc.data() },
    //     );
    //     console.log(subtopics)
    //     setModuleSubtopics(subtopics);
    //   });
  }, []);
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Header>
          <Heading>Module title</Heading>
        </Header>
        <IntroSection>
          <Text>Module Intro</Text>
          <HelpCard help={"module help text"} />
        </IntroSection>
        <CardsContainer>
          We will map over data and render using card element
        </CardsContainer>
      </PageWrapper>
    </>
  );
};

export default ModulePage;
