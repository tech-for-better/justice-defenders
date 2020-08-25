import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadcrumbLink = styled(Link)`
  color: hsla(0, 0%, 0%, 0.4);
  text-transform: capitalize;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
  &:visited,
  &:link,
  &:active {
    color: currentColor;
  }
`;
export { BreadcrumbLink };
