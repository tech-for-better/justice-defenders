import React from "react";
import ReactAudioPlayer from "react-audio-player";

import { MediaContainer } from "../../Styles/Containers";

const Audio = ({ src, title }) => {
  return (
    <MediaContainer>
      <h2>{title}</h2>
      <ReactAudioPlayer controls src={src}>
        Your browser does not support the
        <code>audio</code> element.
      </ReactAudioPlayer>
    </MediaContainer>
  );
};

export default Audio;
