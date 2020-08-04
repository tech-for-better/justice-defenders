import React from "react";
import firebase from "../../firebase";

// components
import ModuleCard from "../../Components/ModuleCard/ModuleCard";
import HelpCard from "../../Components/HelpCard/HelpCard";

// styles
import { ModuleCardsContainer } from "./YearOne.style";
import { IntroSection, Header } from "../../Components/Styles/Containers";
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
        console.log("This is not a viable solution!");
      } else {
        return <ModuleCard key={yearModule.id} title={yearModule.Title} />;
      }
    });
  };

  if (yearModules) {
  
    return (
      <>
        <Header>
          <Heading>{yearInfo.Title}</Heading>
        </Header>
        <IntroSection>
          <Text>{yearInfo.Intro}</Text>
          <HelpCard help={yearInfo.Help} />
        </IntroSection>
        <ModuleCardsContainer>
          {yearModuleCards(yearModules)}
        </ModuleCardsContainer>
      </>
    );
  }
};

export default YearOne;
