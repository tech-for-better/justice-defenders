import React from "react";
import firebase from "../../firebase";
import { useParams } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/Card/Card";
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
  const params = useParams();

  const [modules, setModules] = React.useState([]);
  const [moduleSubtopics, setModuleSubtopics] = React.useState([]);
  const [moduleInfo, setModuleInfo] = React.useState([]);

  const yearCollection = params.year;
  const moduleCollection = `${yearCollection}-${params.module}`;

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(yearCollection)
      .doc("modules")
      .get()
      .then(function (doc) {
        const ordered = sortObject(doc.data());
        const moduleNames = Object.entries(ordered);
        setModules(moduleNames);
      });
  }, [yearCollection]);

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
        setModuleInfo(doc.data());
      });
  }, [moduleCollection]);

  const sortObject = (object) => {
    const ordered = {};
    Object.keys(object)
      .sort()
      .forEach(function (key) {
        ordered[key] = object[key];
      });
    return ordered;
  };

  const subtopicCards = (moduleSubtopics) => {
    const ordered = sortObject(moduleSubtopics);
    const entries = Object.entries(ordered);
    return entries.map((subtopic) => {
      return <Card key={subtopic[0]} title={subtopic[1]} id={subtopic[0]} />;
    });
  };

  return (
    <>
      <Navbar modules={modules} />
      <PageWrapper>
        <Header>
          <Heading>{moduleInfo.title}</Heading>
        </Header>
        <IntroSection>
          <Text>{moduleInfo.intro}</Text>
          <HelpCard help={moduleInfo.help} />
        </IntroSection>
        <CardsContainer>{subtopicCards(moduleSubtopics)}</CardsContainer>
      </PageWrapper>
    </>
  );
};

export default ModulePage;
