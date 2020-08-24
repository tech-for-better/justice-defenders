import React from "react";
import firebase from "../../firebase";
import { useLocation } from "react-router-dom";

import Navbar from "../../Components/Navbars/Navbar";
import Pdf from "../../Components/Media/Pdf/Pdf";

import {
  IntroSection,
  Header,
  PageWrapper,
} from "../../Components/Styles/Containers";
import { Text, Heading } from "../../Components/Styles/Typography";

const GuidancePage = () => {
  const location = useLocation();
  const collection = location.pathname.replace("/", "");

  const [extraGuidance, setExtraGuidance] = React.useState([]);

  React.useEffect(() => {
    let documents = [];
    firebase
      .firestore()
      .collection(collection)
      .get()
      .then((docs) => {
        docs.forEach((doc) => documents.push(doc.data()));
        setExtraGuidance(documents);
      });
  }, [collection]);

  const guidanceDisplay = (extraGuidance) => {
    return extraGuidance.map((guidance) => {
      return <Pdf key={guidance.title} media={guidance}></Pdf>;
    });
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <Header>
          <Heading>{"Extra guidance"}</Heading>
        </Header>
        <IntroSection>
          <Text>
            {
              "On this page you can find supplementary course material such as regulations and handbooks"
            }
          </Text>
        </IntroSection>
        <section>{guidanceDisplay(extraGuidance)}</section>
      </PageWrapper>
    </>
  );
};

export default GuidancePage;
