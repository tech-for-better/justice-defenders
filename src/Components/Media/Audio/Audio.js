import React from "react";
import isElectron from "is-electron";

import DownloadIcon from "../../../assets/download.svg";

import { AudioContainer } from "../../Styles/Containers";
import { AudioName, AudioPlayer, Download } from "./Audio.style";

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
