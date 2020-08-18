import React from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase";

import Navbar from "../../Components/Navbars/Navbar";
import SubNavbar from "../../Components/Navbars/SubNavbar";
import HelpCard from "../../Components/HelpCard/HelpCard";
import Card from "../../Components/Card/Card";

// styles
import { CardsContainer } from "../YearPage/YearPage.style";
import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

import { sortObject } from "../../Helpers/helpers";

const SubtopicPage = () => {
  const params = useParams();
  const yearCollection = params.year;
  const moduleCollection = `${params.year}-${params.module}`;
  const subtopicCollection = `${yearCollection}-${params.module}-${params.subtopic}`;

  const [subtopics, setSubtopics] = React.useState([]);
  const [modules, setModules] = React.useState([]);
  const [subtopicInfo, setSubtopicInfo] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(yearCollection)
      .doc("modules")
      .get()
      .then(function (doc) {
        const orderedModules = sortObject(doc.data());
        const moduleNames = Object.entries(orderedModules);
        setModules(moduleNames);
      });
  }, [yearCollection]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(subtopicCollection)
      .doc("additional")
      .get()
      .then(function (doc) {
        let data = doc.data();
        setSubtopicInfo(data);
        const orderedSubtopics = sortObject(data[`${moduleCollection}-subtopics`]);
        const subtopicNames = Object.entries(orderedSubtopics);
        setSubtopics(subtopicNames);
      });
  }, [subtopicCollection, moduleCollection]);

  const contentCards = (subtopicContent) => {
    return subtopicContent.map((content) => {
      return <Card key={content.name} title={content.name} icon={content.icon} id={content.name} />;
    });
  };

  return (
    <>
      <Navbar modules={modules} />
      <SubNavbar subtopics={subtopics} />
      <PageWrapper>
        <Header>
          <Heading>{subtopicInfo.title}</Heading>
        </Header>
        <IntroSection>
          <Text>{subtopicInfo.intro}</Text>
          <HelpCard help={subtopicInfo.help} />
        </IntroSection>
        <CardsContainer>
          {contentCards([
            {name: "Audio", icon: "../../../assets/audio-icon.png"},
            {name: "Readings", icon: "../../assets/readings-icon.png"},
            {name: "Videos", icon: "../../assets/videos-icon.png"},
          ])}
        </CardsContainer>
      </PageWrapper>
    </>
  );
};
export default SubtopicPage;
