import styled from "styled-components";
import { Link } from "react-router-dom";
import { black, white } from "../Styles/colours";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${black};
  border-right: 1px ${white} solid;
  align-items: center;
  color: ${white};
`;

const NavbarList = styled.ul`
  padding: 0;
  flex: 2;
  margin-bottom: 2rem;
  margin-top: 5rem;
  width: 180px;
`;
const NavbarListItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  width: 100%;
`;
const NavbarSublist = styled.ul`
  padding: 0;
  flex: 2;
  margin-top: 0.5rem;
  width: 180px;
`;
const NavbarSublistItem = styled.li`
  list-style: none;
  padding: 0.5rem 0 0.5rem 1rem;
  width: 100%;
`;

const GuidanceItem = styled.div`
  margin: 2rem 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
`;
const NavbarLinks = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;
  display: block;
  &:hover {
    text-decoration: underline;
  }
  &:visited,
  &:link,
  &:active {
    color: currentColor;
  }
`;
export {
  NavbarContainer,
  NavbarListItem,
  NavbarList,
  NavbarSublist,
  NavbarSublistItem,
  GuidanceItem,
  NavbarLinks,
};
