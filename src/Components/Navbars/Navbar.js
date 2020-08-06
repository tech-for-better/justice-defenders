import React from "react";
import { useParams } from "react-router-dom";

import Logo from "../Logo/Logo";
import {
  NavbarContainer,
  NavbarListItem,
  NavbarSublistItem,
  NavbarList,
  NavbarSublist,
  GuidanceItem,
} from "./Navbar.style";
import {Links} from '../Styles/Typography'

const Navbar = ({ modules }) => {
  const params = useParams();

  const [year, setYear] = React.useState("");

  React.useEffect(() => {
    setYear(params.year);
  }, [params]);

  const moduleRender = (modules) => {
    return modules.map((module) => {
      return (
        <NavbarSublistItem key={module[0]}>
          <Links to={`/${year}/${module[0]}`}>{module[1]}</Links>
        </NavbarSublistItem>
      );
    });
  };

  return (
    <NavbarContainer>
      <Logo />
      <NavbarList>
        <NavbarListItem>
          <Links to="/year1">Year 1 Modules</Links>
          {year === "year1" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem>
          <Links to="/year2">Year 2 Modules</Links>
          {year === "year2" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem>
          <Links to="/year3">Year 3 Modules</Links>
          {year === "year3" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
      </NavbarList>
      <GuidanceItem>
        <Links to="/extra-guidance">Extra Guidance</Links>
      </GuidanceItem>
    </NavbarContainer>
  );
};

export default Navbar;
