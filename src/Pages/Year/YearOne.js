import React from "react";
import firebase from "../../firebase";

// components
import Card from "../../Components/Card/Card";
import HelpCard from "../../Components/HelpCard/HelpCard";
import Navbar from "../../Components/Navbar/Navbar";

// styles
import { CardsContainer } from "./YearOne.style";
import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

const YearOne = () => {
  const [yearInfo, setYearInfo] = React.useState([]);
  const [yearModules, setYearModules] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Year1")
      .onSnapshot((snapshot) => {
        const modules = snapshot.docs.map((doc) =>
          doc.id === "Additional"
            ? setYearInfo({ id: doc.id, ...doc.data() })
            : { id: doc.id, ...doc.data() },
        );
        setYearModules(modules);
      });
  }, []);

  const yearModuleCards = (yearModules) => {
    return yearModules.map((yearModule) => {
      if (!yearModule) {
        return console.log("This is not a viable solution!");
      } else {
        return (
          <Card
            key={yearModule.id}
            title={yearModule.Title}
            id={yearModule.id}
          />
        );
      }
    });
  };

  if (yearModules) {
    return (
      <>
        <Navbar />
        <PageWrapper>
          <Header>
            <Heading>{yearInfo.Title}</Heading>
          </Header>
          <IntroSection>
            <Text>{yearInfo.Intro}</Text>
            <HelpCard help={yearInfo.Help} />
          </IntroSection>
          <CardsContainer>{yearModuleCards(yearModules)}</CardsContainer>
        </PageWrapper>
      </>
    );
  }
};

export default YearOne;
