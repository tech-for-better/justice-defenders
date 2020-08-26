import styled from "styled-components";
import { black } from "../Styles/colours";

const HelpContainer = styled.div`
  min-width: 10rem;
  min-height: 5rem;
  max-height: 10rem;
  max-width: 15rem;
  border-radius: 5px;
  border: 1px dashed ${black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
  padding: 1rem;
`;
const SVGWrapper = styled.svg`
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: -6px;
  right: -10px;
`;

export { HelpContainer, SVGWrapper };
