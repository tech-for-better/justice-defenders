import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;
  max-width: 20vw;
  background-color: lightgrey;
`;

const NavbarList = styled.ul`
  padding: 0;
  flex: 2;
  margin-bottom: 2rem;
`;

const NavbarListItem = styled.li`
  list-style: none;
  margin: 2.5rem 0;
`;

const NavbarSublistItem = styled.li`
  list-style: none;
  margin: 1rem 0;
  text-align: right;
`;

const GuidanceItem = styled.p`
  margin: 2rem 0;
`;

export {
  NavbarContainer,
  NavbarListItem,
  NavbarList,
  NavbarSublistItem,
  GuidanceItem,
};
