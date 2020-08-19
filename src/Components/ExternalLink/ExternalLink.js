import React from "react";

import { XternalLink } from "../Styles/Typography";

const ExternalLink = ({ href, textContent }) => {
  return (
    <XternalLink data-cy='external-link' href={href} target="_blank">
      {textContent}
    </XternalLink>
  );
};

export default ExternalLink;
