import React from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase";

import Navbar from "../../Components/Navbars/Navbar";
import SubNavbar from "../../Components/Navbars/SubNavbar";
import HelpCard from "../../Components/HelpCard/HelpCard";
import Video from "../../Components/Media/Video/Video";
import Audio from "../../Components/Media/Audio/Audio";
import Pdf from "../../Components/Media/Pdf/Pdf";

// styles
import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

import { sortObject } from "../../Helpers/helpers";

const ContentPage = () => {
  const params = useParams();
  const yearCollection = params.year;
  const mediaType = params.content;
  const subtopicCollection = `${yearCollection}-${params.module}-${params.subtopic}`;
  const contentFolder = `${yearCollection}-${params.module}-${params.subtopic}-${params.content}`;

  const [subtopics, setSubtopics] = React.useState([]);
  const [modules, setModules] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [content, setContent] = React.useState([]);
  const [mediaNames, setMediaNames] = React.useState([])

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
        setTitle(data.title);
        const orderedSubtopics = sortObject(data["year1-module1-subtopics"]);
        const subtopicNames = Object.entries(orderedSubtopics);
        setSubtopics(subtopicNames);
      });
  }, [subtopicCollection]);

  React.useEffect(() => {
    const storage = firebase.storage();
    const urlArray = [];
    const nameArray = [];
    let storageRef = storage.ref(contentFolder);
    const fetch = async () => {
      const res = await storageRef.listAll()
        res.items.map(async (item) => {
          console.log(item.location.path.split('/')[1])
          nameArray.push(item.location.path.split('/')[1])
          const url = await item.getDownloadURL();
          urlArray.push(url);
        });
       setContent(urlArray);
       setMediaNames(nameArray)
    }
    fetch();
  }, [contentFolder]);

  const mediaDisplay = () => {
    if (mediaType === "videos") {
      return content.map((url) => {
        return <Video key={url} src={url} />;
      });
    } else if (mediaType === "audio") {
      return content.map((url) => {
        return <Audio key={url} src={url} />;
      });
    } else {
      return content.map((url) => {
        return <Pdf key={url} src={url} />;
      });
    }
  };

  return (
    <>
      <Navbar modules={modules} />
      <SubNavbar subtopics={subtopics} title={title} />
      <PageWrapper>
        <Header>
          <Heading>{params.content}</Heading>
        </Header>
        <IntroSection>
          <Text />
          <HelpCard help={`Find here ${params.content} about ${title}`} />
        </IntroSection>
        <section>{mediaDisplay()}</section>
      </PageWrapper>
    </>
  );
};

export default ContentPage;
