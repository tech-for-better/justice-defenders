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
const XternalLink = styled.a`
  text-decoration: inherit;
  font-size: 1.2rem;
  background-color: #e3032e;
  padding: 0.7rem;
  text-transform: uppercase;
  color: #fbfaf8;
  transition: color 0.4s ease-out, background-color 0.4s ease-out;
  position: fixed;
  bottom: 15%;
  right: 0;
  &:hover {
    cursor: pointer;
    background-color: #fab900;
    color: black;
  }
`;

const MainTitle = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  text-align: center;
`;

export { Text, Heading, Links, XternalLink, MainTitle };
