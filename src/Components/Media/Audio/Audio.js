import React from "react";
import isElectron from "is-electron";

import DownloadIcon from "../../../assets/download.svg";

import {
  AudioName,
  AudioPlayer,
  Download,
  AudioContainer,
} from "./Audio.style";

const Audio = ({ src, title }) => {
  return (
    <AudioContainer>
      <AudioName>{title}:</AudioName>
      <AudioPlayer controls src={src}>
        Your browser does not support the
        <code>audio</code> element.
      </AudioPlayer>
      {isElectron() && (
        <a download target="_blank" rel="noopener noreferrer" href={src}>
          <Download src={DownloadIcon} />
        </a>
      )}
    </AudioContainer>
  );
};

export default Audio;
