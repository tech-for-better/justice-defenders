import React from "react";
import { useParams } from "react-router-dom";

import {
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  NavbarSublistItem,
  NavbarSublist,
} from "./Navbar.style";
import { Links } from '../Styles/Typography'

import { sortObject } from "../../Helpers/helpers";

const SubNavbar = ({ subtopics, title }) => {
  const params = useParams();

  const year = params.year;
  const module = params.module;
  const subtopic = params.subtopic;

  const contentRender = (content) => {
    const orderedSubtopic = sortObject(content);
    const contentArray = Object.entries(orderedSubtopic);
    return contentArray.map((content) => {
     return( <NavbarSublistItem>
        <Links to={`/${year}/${module}/${subtopic}/${content[0]}`}>
          {content[1]}
        </Links>
      </NavbarSublistItem>
    )});
  };

  const subtopicRender = (subtopics) => {
    return subtopics.map((subtopic) => {
      return (
        <NavbarListItem key={subtopic[0]}>
          <Links to={`/${year}/${module}/${subtopic[0]}`}>{subtopic[1]}</Links>
          {title === subtopic[1] ? (
            <NavbarSublist>
              {contentRender({
                readings: "Readings",
                videos: "Videos",
                audio: "Audio",
              })}
            </NavbarSublist>
          ) : null}
        </NavbarListItem>
      );
    });
  };

  return (
    <NavbarContainer>
      <NavbarList>{subtopicRender(subtopics)}</NavbarList>
    </NavbarContainer>
  );
};

export default SubNavbar;
