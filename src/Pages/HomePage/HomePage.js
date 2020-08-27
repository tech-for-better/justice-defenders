import React from "react";
// import YouTubePlayer from "react-player/lib/players/YouTube";

// components
import Navbar from "../../Components/Navbars/Navbar";
import ExternalLink from "../../Components/ExternalLink/ExternalLink";

// styles
import { MainTitle } from "../../Components/Styles/Typography";
import { PageWrapper } from "../../Components/Styles/Containers";
import { YoutubeContainer } from "./HomePage.style";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <MainTitle>
          Welcome to the Justice Defenders LLB learning platform!
        </MainTitle>
        <YoutubeContainer>
          <iframe
            title="intro-video"
            width="860"
            height="485"
            src="https://www.youtube.com/embed/bOHtZ1l_1Q8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </YoutubeContainer>
        <ExternalLink
          href={"https://www.justice-defenders.org/"}
          textContent={"Visit Justice Defenders website →"}
        />
      </PageWrapper>
    </>
  );
};

export default HomePage;
