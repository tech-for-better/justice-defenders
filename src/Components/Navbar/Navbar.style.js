import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 15vw;
  min-width: 150px;
  background-color: lightgrey;
`;

const NavbarList = styled.ul`
  padding: 0;
  flex: 2;
`;

const NavbarListItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 1rem 0;
`;

const GuidanceItem = styled.p`
  cursor: pointer;
  margin: 2rem 0;
`;

export { NavbarContainer, NavbarListItem, NavbarList, GuidanceItem };
