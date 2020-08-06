import React from "react";
import { Link, useParams } from "react-router-dom";

import { NavbarContainer, NavbarList, NavbarListItem } from "./Navbar.style";

const SubNavbar = ({ subtopics }) => {
  const params = useParams();

  const year = params.year;
  const module = params.module;

  const subtopicRender = (subtopics) => {
    return subtopics.map((subtopic) => {
      return (
        <NavbarListItem key={subtopic[0]}>
          <Link to={`/${year}/${module}/${subtopic[0]}`}>{subtopic[1]}</Link>
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
