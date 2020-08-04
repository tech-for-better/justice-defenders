import styled from "styled-components";

const HelpContainer = styled.div`
  width: 10rem;
  height: 5rem;
  border-radius: 5px;
  border: 1px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
`;
const SVGWrapper = styled.svg`
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: -6px;
  left: -10px;
`;

export { HelpContainer, SVGWrapper };
