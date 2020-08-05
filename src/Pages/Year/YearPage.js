import React from "react";
import firebase from "../../firebase";

// components
import Card from "../../Components/Card/Card";
import HelpCard from "../../Components/HelpCard/HelpCard";
import Navbar from "../../Components/Navbar/Navbar";

// styles
import { CardsContainer } from "./YearPage.style";
import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

const YearPage = () => {
  const [yearInfo, setYearInfo] = React.useState([]);
  const [yearModules, setYearModules] = React.useState([]);

  // THIS MUST BE REFACTORED
  const pathname = window.location.pathname.split("");
  const collection =
    pathname.slice(1, pathname.length).join("").charAt(0).toUpperCase() +
    pathname.join("").slice(2);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(collection)
      .onSnapshot((snapshot) => {
        const modules = snapshot.docs.map((doc) =>
          doc.id === "Additional"
            ? setYearInfo({ id: doc.id, ...doc.data() })
            : { id: doc.id, ...doc.data() },
        );
        setYearModules(modules);
      });
  }, [collection]);

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
        <Navbar modules={yearInfo} />
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

export default YearPage;
