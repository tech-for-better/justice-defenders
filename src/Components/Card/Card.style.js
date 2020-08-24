import styled from "styled-components";
import { ReactSVG } from "react-svg";

const CardContainer = styled.div`
  min-width: 10rem;
  min-height: 5rem;
  background-color: lightgrey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

const Icon = styled(ReactSVG)`
  height: 2.5rem;
  width: 3rem;
  margin-bottom: 1rem;
`;
const Title = styled.h4`
  text-transform: capitalize;
`;
export { Icon, CardContainer, Title };
