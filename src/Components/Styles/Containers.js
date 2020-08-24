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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  margin-top: 2rem;
`;

const PageWrapper = styled.div`
  padding: 2rem;
  width: 100%;
`;
const IntroTextWrapper = styled.div`
  margin-right: 2rem;
  max-width: 50rem;
`;
const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
export {
  IntroSection,
  Header,
  PageWrapper,
  FullScreenSection,
  IntroTextWrapper,
  ContentSection,
  MediaContainer,
};
