import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Audio = ({ src }) => {
  return (
    <ReactAudioPlayer controls src={src}>
      Your browser does not support the
      <code>audio</code> element.
    </ReactAudioPlayer>
  );
};

export default Audio;
