import React from "react";
import { useParams } from "react-router-dom";
import firebase from '../../firebase';

import Navbar from "../../Components/Navbars/Navbar";
import SubNavbar from "../../Components/Navbars/SubNavbar";
import HelpCard from "../../Components/HelpCard/HelpCard";

// styles
import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

import { sortObject } from '../../Helpers/helpers'

const ContentPage = () => {
    const params = useParams();
    const yearCollection = params.year;
    const subtopicCollection = `${yearCollection}-${params.module}-${params.subtopic}`;
  
    const [subtopics, setSubtopics] = React.useState([]);
    const [modules, setModules] = React.useState([]);
    const [title, setTitle] = React.useState([]);
  
    React.useEffect(() => {
      firebase
        .firestore()
        .collection(yearCollection)
        .doc("modules")
        .get()
        .then(function (doc) {
          const orderedModules = sortObject(doc.data())
          const moduleNames = Object.entries(orderedModules)
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
          let data = doc.data()
          setTitle(data.title);
          const orderedSubtopics = sortObject(data['year1-module1-subtopics'])
          const subtopicNames = Object.entries(orderedSubtopics)
          setSubtopics(subtopicNames);
        });
    }, [subtopicCollection]);

  
    return (
      <>
        <Navbar modules={modules}/>
        <SubNavbar subtopics={subtopics} title={title}/>
        <PageWrapper>
              <Header>
                <Heading>{params.content}</Heading>
              </Header>
              <IntroSection>
                  <Text/>
                <HelpCard help={`Find here ${params.content} about ${title}` } />
              </IntroSection>
            </PageWrapper>
      </>
    );
};

export default ContentPage;
