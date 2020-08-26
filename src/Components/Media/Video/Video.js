import React from "react";
import isElectron from "is-electron";

import DownloadIcon from "../../../assets/download.svg";
import { VideoElement, VideoHeader } from "./Video.style";
import { VideoContainer } from "../../Styles/Containers";
import { Download } from "../Audio/Audio.style";

const Video = ({ src, title }) => {
  return (
    <>
      <VideoContainer>
        <VideoHeader>
          <h2>{title}:</h2>
          {isElectron() && (
            <a download target="_blank" rel="noopener noreferrer" href={src}>
              <Download src={DownloadIcon} />
            </a>
          )}
        </VideoHeader>
        <VideoElement controls width="100%" playsinline>
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </VideoElement>
      </VideoContainer>
    </>
  );
};

export default Video;
