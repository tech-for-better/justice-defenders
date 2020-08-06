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
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: currentColor;
}
`
export { Text, Heading, Links };
