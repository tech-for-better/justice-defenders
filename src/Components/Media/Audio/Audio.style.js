import styled from "styled-components";
import { ReactSVG } from "react-svg";

const AudioName = styled.h3`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 50%;
`;

const AudioPlayer = styled.audio`
  margin: 1rem;
`;

const Download = styled(ReactSVG)`
  margin: 1rem;
  width: 2rem;
  height: 2rem;
`;

export { AudioName, AudioPlayer, Download };
