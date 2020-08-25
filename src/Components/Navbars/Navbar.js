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
  NavbarLinks,
} from "./Navbar.style";
import { Links } from "../Styles/Typography";

const Navbar = ({ modules }) => {
  const params = useParams();

  const [year, setYear] = React.useState("");

  React.useEffect(() => {
    setYear(params.year);
  }, [params]);

  const moduleRender = (modules) => {
    return modules.map((module) => {
      return (
        <NavbarSublistItem
          data-cy="navbar-sublist-item"
          key={module[0]}
          style={params.module === module[0] ? active : null}>
          <NavbarLinks to={`/${year}/${module[0]}`}>{module[1]}</NavbarLinks>
        </NavbarSublistItem>
      );
    });
  };

  const active = {
    backgroundColor: "#fbfaf8",
    textDecoration: "underline",
    color: "#010F1F",
  };
  const normal = {
    backgroundColor: "#FAB900",
    color: "#010F1F",
  };
  return (
    <NavbarContainer>
      <Logo />
      <NavbarList>
        <NavbarListItem style={year === "year1" && !modules ? active : null}>
          <NavbarLinks data-cy="year1" to="/year1">
            Year I
          </NavbarLinks>
          {year === "year1" && modules ? (
            <NavbarSublist data-cy="navbar-sublist">
              {moduleRender(modules)}
            </NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem style={year === "year2" && !modules ? active : null}>
          <NavbarLinks data-cy="year2" to="/year2">
            Year II
          </NavbarLinks>
          {year === "year2" && modules ? (
            <NavbarSublist data-cy="navbar-sublist">
              {moduleRender(modules)}
            </NavbarSublist>
          ) : null}
        </NavbarListItem>
        <NavbarListItem style={year === "year3" && !modules ? active : null}>
          <NavbarLinks data-cy="year3" to="/year3">
            Year III
          </NavbarLinks>
          {year === "year3" && modules ? (
            <NavbarSublist data-cy="navbar-sublist">
              {moduleRender(modules)}
            </NavbarSublist>
          ) : null}
        </NavbarListItem>
      </NavbarList>
      <GuidanceItem
        style={window.location.hash === "#/extra-guidance" ? active : normal}>
        <Links
          style={{
            textTransform: "uppercase",
          }}
          data-cy="extra-guidance"
          to="/extra-guidance">
          Extra Guidance
        </Links>
      </GuidanceItem>
    </NavbarContainer>
  );
};

export default Navbar;
