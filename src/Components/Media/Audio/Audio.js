import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Audio = ({ src, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <ReactAudioPlayer controls src={src}>
        Your browser does not support the
        <code>audio</code> element.
      </ReactAudioPlayer>
    </>
  );
};

export default Audio;
