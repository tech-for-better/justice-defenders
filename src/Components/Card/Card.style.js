import styled from "styled-components";
import { ReactSVG } from "react-svg";

const CardContainer = styled.button`
  min-height: 8rem;
  min-width: 9rem;
  max-width: 15rem;
  letter-spacing: 0.1rem;
  background-color: #e3032e;
  border: none;
  padding: 1rem;
  font-size: 0.8rem;
  color: #fbfaf8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  font-family: "IBM Plex Sans", sans-serif;
  transition: background-color 0.4s ease-out;
  &:hover {
    background-color: #fab900;
  }
`;

const Icon = styled(ReactSVG)`
  height: 2.5rem;
  width: 3rem;
  margin: 1rem 0;
`;
const Title = styled.h4`
  text-transform: uppercase;
  margin: 0;
`;
export { Icon, CardContainer, Title };
