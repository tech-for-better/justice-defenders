import React from "react";
import firebase from "../../firebase";
import { useParams } from "react-router-dom";

// components
import Card from "../../Components/Card/Card";
import HelpCard from "../../Components/HelpCard/HelpCard";
import Navbar from "../../Components/Navbars/Navbar";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

// styles
import { CardsContainer } from "./YearPage.style";
import {
  IntroSection,
  IntroTextWrapper,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

import { sortObject } from "../../Helpers/helpers";

const YearPage = () => {
  const params = useParams();

  const [yearInfo, setYearInfo] = React.useState([]);
  const [yearModules, setYearModules] = React.useState([]);

  const collection = params.year;

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(collection)
      .doc("modules")
      .get()
      .then(function (doc) {
        setYearModules(doc.data());
      });
  }, [collection]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(collection)
      .doc("additional")
      .get()
      .then(function (doc) {
        setYearInfo(doc.data());
      });
  }, [collection]);

  const yearModuleCards = (yearModules) => {
    const ordered = sortObject(yearModules);
    const entries = Object.entries(ordered);
    return entries.map((module) => {
      return (
        <Card
          dataCy={"module-cards"}
          key={module[0]}
          title={module[1]}
          id={module[0]}
        />
      );
    });
  };

  const crumbs = [{ title: yearInfo.title, href: `/${collection}` }];

  if (yearModules) {
    return (
      <>
        <Navbar />
        <PageWrapper>
          {yearInfo.title && <BreadCrumbs crumbs={crumbs}></BreadCrumbs>}
          <Header>
            <Heading data-cy="year-title">{yearInfo.title}</Heading>
          </Header>
          <IntroSection>
            <IntroTextWrapper>
              <Text data-cy="year_intro-text">{yearInfo.intro}</Text>
            </IntroTextWrapper>
            <HelpCard help={yearInfo.help} />
          </IntroSection>
          <CardsContainer>{yearModuleCards(yearModules)}</CardsContainer>
        </PageWrapper>
      </>
    );
  }
};

export default YearPage;
