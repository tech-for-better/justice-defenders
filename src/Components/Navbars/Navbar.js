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
        <NavbarSublistItem key={module[0]} style={params.module === module[0] ? active : null }>
          <Links to={`/${year}/${module[0]}`} >{module[1]}</Links>
        </NavbarSublistItem>
      );
    });
  };
  
  const active = {
    backgroundColor: "white",
    textDecoration: "underline",
}

  return (
    <NavbarContainer>
      <Logo />
      <NavbarList>
        <NavbarListItem style={(year === 'year1') && !modules ? active : null}>
          <Links data-cy="year1" to="/year1">Year 1 Modules</Links>
          {year === "year1" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem style={(year === 'year2') && !modules ? active : null}>
          <Links data-cy="year2" to="/year2" >Year 2 Modules</Links>
          {year === "year2" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem style={(year === 'year3') && !modules ? active : null}>
          <Links data-cy="year3" to="/year3" >Year 3 Modules</Links>
          {year === "year3" && modules ? (
            <NavbarSublist>{moduleRender(modules)}</NavbarSublist>
          ) : null}
        </NavbarListItem>
      </NavbarList>
      <GuidanceItem style={(window.location.pathname === '/extra-guidance') ? active : null}>
        <Links data-cy="extra-guidance" to="/extra-guidance" >Extra Guidance</Links>
      </GuidanceItem>
    </NavbarContainer>
  );
};

export default Navbar;
