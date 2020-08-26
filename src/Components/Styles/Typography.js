import styled from "styled-components";
import { Link } from "react-router-dom";

const Text = styled.p`
  font-size: 1.2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
`;

const Links = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: currentColor;
  }
`;

const MainTitle = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  text-align: center;
`;

export { Text, Heading, Links, MainTitle };
