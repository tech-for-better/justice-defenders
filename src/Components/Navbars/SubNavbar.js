import React from "react";
import { useParams } from "react-router-dom";

import {
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  NavbarSublistItem,
  NavbarSublist,
  NavbarLinks,
} from "./Navbar.style";

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
      return (
        <NavbarSublistItem
          key={content[0]}
          style={params.content === content[0] ? active : null}>
          <NavbarLinks to={`/${year}/${module}/${subtopic}/${content[0]}`}>
            {content[1]}
          </NavbarLinks>
        </NavbarSublistItem>
      );
    });
  };

  const subtopicRender = (subtopics) => {
    return subtopics.map((subtopic) => {
      return (
        <NavbarListItem
          key={subtopic[0]}
          style={
            params.subtopic === subtopic[0] && !params.content ? active : null
          }>
          <NavbarLinks to={`/${year}/${module}/${subtopic[0]}`}>
            {subtopic[1]}
          </NavbarLinks>
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

  const active = {
    backgroundColor: "white",
    textDecoration: "underline",
  };

  return (
    <NavbarContainer>
      <NavbarList>{subtopicRender(subtopics)}</NavbarList>
    </NavbarContainer>
  );
};

export default SubNavbar;
