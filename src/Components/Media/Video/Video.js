import React from "react";

import { VideoElement } from "./Video.style";
import { VideoContainer } from "../../Styles/Containers";

const Video = ({ src, title }) => {
  return (
    <>
      <VideoContainer>
        <h2>{title}:</h2>
        <VideoElement controls width="100%" playsinline>
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </VideoElement>
      </VideoContainer>
    </>
  );
};

export default Video;
