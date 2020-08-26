import styled from "styled-components";

const IntroSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

const FullScreenSection = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
`;
const Header = styled.header`
  margin-top: 2rem;
`;

const PageWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  position: relative;
  max-height: 100vh;
  overflow: scroll;
`;
const IntroTextWrapper = styled.div`
  margin-right: 2rem;
  max-width: 50rem;
  text-align: justify;
`;
const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export {
  IntroSection,
  Header,
  PageWrapper,
  FullScreenSection,
  IntroTextWrapper,
  ContentSection,
};
