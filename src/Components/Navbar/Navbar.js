import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../Logo/Logo";
import {
  NavbarContainer,
  NavbarListItem,
  NavbarList,
  GuidanceItem,
} from "./Navbar.style";

const Navbar = () => {
  const history = useHistory();

  const handleYearClick = (event) => {
    const year = event.target.innerText;
    const redirect = year.toLowerCase().split(" ").slice(0, 2).join("");
    history.push(`/${redirect}`);
  };

  return (
    <NavbarContainer>
      <Logo />
      <NavbarList>
        <NavbarListItem onClick={(event) => handleYearClick(event)}>
          Year 1 Modules
        </NavbarListItem>
        <NavbarListItem onClick={(event) => handleYearClick(event)}>
          Year 2 Modules
        </NavbarListItem>
        <NavbarListItem onClick={(event) => handleYearClick(event)}>
          Year 3 Modules
        </NavbarListItem>
      </NavbarList>
      <GuidanceItem onClick={(event) => handleYearClick(event)}>
        Extra Guidance
      </GuidanceItem>
    </NavbarContainer>
  );
};

export default Navbar;
