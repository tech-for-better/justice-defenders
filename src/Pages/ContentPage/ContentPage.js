import React from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase";
import Modal from "@material-ui/core/Modal";

import Navbar from "../../Components/Navbars/Navbar";
import SubNavbar from "../../Components/Navbars/SubNavbar";
import HelpCard from "../../Components/HelpCard/HelpCard";
import Video from "../../Components/Media/Video/Video";
import Audio from "../../Components/Media/Audio/Audio";
import Pdf from "../../Components/Media/Pdf/Pdf";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

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
  let contentCollection = `${yearCollection}-${params.module}-${params.subtopic}-${params.content}`;

  const [subtopics, setSubtopics] = React.useState([]);
  const [modules, setModules] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [content, setContent] = React.useState([]);
  const [crumbs, setCrumbs] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(yearCollection)
      .doc("modules")
      .get()
      .then((doc) => {
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
      .then((doc) => {
        let data = doc.data();
        setTitle(data.title);
        const orderedSubtopics = sortObject(data["year1-module1-subtopics"]);
        const subtopicNames = Object.entries(orderedSubtopics);
        setSubtopics(subtopicNames);
      });
  }, [subtopicCollection]);

  React.useEffect(() => {
    const mediaArray = [];
    firebase
      .firestore()
      .collection(contentCollection)
      .get()
      .then((docs) => {
        docs.forEach((doc) => mediaArray.push(doc.data()));
        setContent(mediaArray);
      });
  }, [contentCollection]);

  const mediaDisplay = () => {
    if (mediaType === "videos") {
      return content.map((media) => {
        return <Video key={media.url} src={media.url} title={media.title} />;
      });
    } else if (mediaType === "audio") {
      return content.map((media) => {
        return <Audio key={media.url} src={media.url} title={media.title} />;
      });
    } else {
      return content.map((media) => {
        return (
          <li key={media.title}>
            <button type="button" onClick={handleOpen}>
              {media.title}
            </button>
            <Modal
              media={media}
              open={open}
              onClose={handleClose}
              aria-labelledby={`pdf: ${media.title}`}>
              {<Pdf src={media.url}/>}
            </Modal>
          </li>
        );
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  React.useEffect(() => {
    const year =
      yearCollection === "year1"
        ? "Year One"
        : yearCollection === "year2"
        ? "Year Two"
        : "Year Three";

    const moduleTitle = modules.map((module) => {
      return module[0] === params.module ? module[1] : null;
    });

    setCrumbs([
      { title: `${year}`, href: `/${yearCollection}` },
      { title: moduleTitle, href: `/${params.year}/${params.module}` },
      {
        title: title,
        href: `/${params.year}/${params.module}/${params.subtopic}`,
      },
      {
        title: params.content,
        href: `/${params.year}/${params.module}/${params.subtopic}/${params.content}`,
      },
    ]);
  }, [modules, yearCollection, subtopicCollection, params, subtopics, title]);

  return (
    <>
      <Navbar modules={modules} />
      <SubNavbar subtopics={subtopics} title={title} />
      <PageWrapper>
        {<BreadCrumbs crumbs={crumbs}></BreadCrumbs>}
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
