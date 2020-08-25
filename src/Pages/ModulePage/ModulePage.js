import React from "react";
import firebase from "../../firebase";
import { useParams } from "react-router-dom";

import Navbar from "../../Components/Navbars/Navbar";
import Card from "../../Components/Card/Card";
import HelpCard from "../../Components/HelpCard/HelpCard";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

// styles
import { CardsContainer } from "../YearPage/YearPage.style";
import {
  IntroSection,
  Header,
  PageWrapper,
  IntroTextWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

import { sortObject } from "../../Helpers/helpers";

const ModulePage = (props) => {
  const params = useParams();

  const [modules, setModules] = React.useState([]);
  const [moduleSubtopics, setModuleSubtopics] = React.useState([]);
  const [moduleInfo, setModuleInfo] = React.useState([]);

  const yearCollection = params.year;
  const moduleCollection = `${yearCollection}-${params.module}`;

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(moduleCollection)
      .doc("subtopics")
      .get()
      .then(function (doc) {
        setModuleSubtopics(doc.data());
      });
  }, [moduleCollection]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(moduleCollection)
      .doc("additional")
      .get()
      .then(function (doc) {
        let data = doc.data();
        setModuleInfo(data);
        const orderedModules = sortObject(data[`${yearCollection}-modules`]);
        const moduleNames = Object.entries(orderedModules);
        setModules(moduleNames);
      });
  }, [moduleCollection, yearCollection]);

  const subtopicCards = (moduleSubtopics) => {
    const ordered = sortObject(moduleSubtopics);
    const entries = Object.entries(ordered);
    return entries.map((subtopic) => {
      return (
        <Card
          dataCy={"subtopic-cards"}
          key={subtopic[0]}
          title={subtopic[1]}
          id={subtopic[0]}
        />
      );
    });
  };

  const year =
    yearCollection === "year1"
      ? "Year I"
      : yearCollection === "year2"
      ? "Year II"
      : "Year III";

  const crumbs = [
    { title: `${year}`, href: `/${yearCollection}` },
    { title: moduleInfo.title, href: `/${yearCollection}/${params.module}` },
  ];

  if (modules) {
    return (
      <>
        <Navbar modules={modules} />
        <PageWrapper>
          {moduleInfo.title && <BreadCrumbs crumbs={crumbs}></BreadCrumbs>}
          <Header>
            <Heading data-cy="module-title">{moduleInfo.title}</Heading>
          </Header>
          <IntroSection>
            <IntroTextWrapper>
              <Text data-cy="module_intro-text">{moduleInfo.intro}</Text>
            </IntroTextWrapper>
            <HelpCard help={moduleInfo.help} />
          </IntroSection>
          <CardsContainer>{subtopicCards(moduleSubtopics)}</CardsContainer>
        </PageWrapper>
      </>
    );
  }
};

export default ModulePage;
