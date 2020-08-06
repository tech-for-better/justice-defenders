import React from "react";
import { Link, useParams } from "react-router-dom";

import Logo from "../Logo/Logo";
import {
  NavbarContainer,
  NavbarListItem,
  NavbarSublistItem,
  NavbarList,
  NavbarSublist,
  GuidanceItem,
} from "./Navbar.style";

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
          <Link to={`/${year}/${module[0]}`}>{module[1]}</Link>
        </NavbarSublistItem>
      );
    });
  };

  return (
    <NavbarContainer>
      <Logo />
      <NavbarList>
        <NavbarListItem>
          <Link to="/year1">Year 1 Modules</Link>
          {year === "year1" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/year2">Year 2 Modules</Link>
          {year === "year2" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/year3">Year 3 Modules</Link>
          {year === "year3" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
      </NavbarList>
      <GuidanceItem>
        <Link to="/extra-guidance">Extra Guidance</Link>
      </GuidanceItem>
    </NavbarContainer>
  );
};

export default Navbar;
