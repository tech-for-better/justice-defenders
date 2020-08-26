import styled from "styled-components";
import { red, yellow, black } from "../Styles/colours";

const XternalLink = styled.a`
  text-decoration: inherit;
  font-size: 1.2rem;
  background-color: ${red};
  padding: 0.7rem;
  text-transform: uppercase;
  color: ${black};
  transition: color 0.4s ease-out, background-color 0.4s ease-out;
  position: fixed;
  bottom: 15%;
  right: 0;
  &:hover {
    cursor: pointer;
    background-color: ${yellow};
  }
`;
export { XternalLink };
