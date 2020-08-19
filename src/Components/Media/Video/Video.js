import React from "react";

import { VideoContainer, VideoElement } from "./Video.style";

const Video = ({ src, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <VideoContainer>
        <VideoElement
          controls
          width="100%"
          playsinline>
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </VideoElement>
      </VideoContainer>
    </>
  );
};

export default Video;
