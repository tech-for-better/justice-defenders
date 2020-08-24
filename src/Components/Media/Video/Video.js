import React from "react";

import { VideoElement } from "./Video.style";
import { MediaContainer } from "../../Styles/Containers";

const Video = ({ src, title }) => {
  return (
    <>
      <MediaContainer>
        <h2>{title}</h2>
        <VideoElement controls width="100%" playsinline>
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </VideoElement>
      </MediaContainer>
    </>
  );
};

export default Video;
