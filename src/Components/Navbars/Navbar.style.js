import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;
  max-width: 20vw;
  background-color: lightgrey;
  border-right: 1px white solid;
`;

const NavbarList = styled.ul`
  padding: 0;
  flex: 2;
  margin-bottom: 2rem;
  margin-top: 5rem;
`;
const NavbarSublist = styled.ul`
  padding: 0;
  flex: 2;
  margin-bottom: 2rem;
`;
const NavbarSublistItem = styled.li`
  list-style: none;
  margin: 1rem 0;
  text-align: right;
`;
const NavbarListItem = styled.li`
  list-style: none;
  margin: 1.5rem 0;
`;
const GuidanceItem = styled.p`
  margin: 2rem 0;
`;

export {
  NavbarContainer,
  NavbarListItem,
  NavbarList,
  NavbarSublist,
  NavbarSublistItem,
  GuidanceItem,
};
