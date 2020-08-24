import React from "react";

import { MediaContainer } from "../../Styles/Containers";

const Audio = ({ src, title }) => {
  return (
    <MediaContainer>
      <h2>{title}</h2>
      <audio controls src={src}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <a download target="_blank" rel="noopener noreferrer" href={src}>
        download
        {/* <button>Download!</button> */}
      </a>
    </MediaContainer>
  );
};

export default Audio;
