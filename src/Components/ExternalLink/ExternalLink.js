import React from "react";

import { XternalLink } from "../Styles/Typography";

const ExternalLink = ({ href, textContent }) => {
  return (
    <XternalLink href={href} target="_blank">
      {textContent}
    </XternalLink>
  );
};

export default ExternalLink;
