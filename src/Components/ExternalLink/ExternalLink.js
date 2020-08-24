import React from "react";
import isElectron from "is-electron";

import { XternalLink } from "../Styles/Typography";

const { shell } = window;

const ExternalLink = ({ href, textContent }) => {
  const defaultBrowser = (event) => {
    if (isElectron()) {
      event.preventDefault();
      let link = event.target.href;
      shell.openExternal(link);
    }
  };

  return (
    <XternalLink
      data-cy="external-link"
      href={href}
      onClick={defaultBrowser}
      target="_blank">
      {textContent}
    </XternalLink>
  );
};

export default ExternalLink;
