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

const SubNavbar = ({ subtopics, title }) => {
  const params = useParams();

  const year = params.year;
  const module = params.module;
  const subtopic = params.subtopic;

  const contentRender = (content) => {
    const contentArray = Object.entries(content);
    return contentArray.map((content) => {
      return (
        <NavbarSublistItem
          data-cy="subNavbar-sublist-item"
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
          data-cy="subNavbar-item"
          key={subtopic[0]}
          style={
            params.subtopic === subtopic[0] && !params.content ? active : null
          }>
          <NavbarLinks to={`/${year}/${module}/${subtopic[0]}`}>
            {subtopic[1]}
          </NavbarLinks>
          {title === subtopic[1] ? (
            <NavbarSublist data-cy="subNavbar-sublist">
              {contentRender({
                audio: "audio",
                readings: "readings",
                videos: "videos",
                assessments: "assessments",
              })}
            </NavbarSublist>
          ) : null}
        </NavbarListItem>
      );
    });
  };

  const active = {
    backgroundColor: "#fbfaf8",
    textDecoration: "underline",
    color: "#010F1F",
  };

  return (
    <NavbarContainer>
      <NavbarList data-cy="subNavbar">{subtopicRender(subtopics)}</NavbarList>
    </NavbarContainer>
  );
};

export default SubNavbar;
