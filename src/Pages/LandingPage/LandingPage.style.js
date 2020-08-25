import styled from "styled-components";
import { ReactSVG } from "react-svg";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingButton = styled.button`
  border: none;
  outline: none;
  min-width: 6rem;
  min-height: 3rem;
  margin: 1rem;
  padding: 0.75rem;
  transition: background-color 0.4s ease-out;
  font-size: 1.2rem;
  color: white;
  letter-spacing: 0.01rem;
  font-family: "IBM Plex Sans", sans-serif;
  background-color: #e3032e;
  &:hover {
    cursor: pointer;
    background-color: #fab900;
  }
`;

const MainTitleLogo = styled(ReactSVG)`
  height: 8rem;
  width: 12rem;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { MainTitleLogo, LandingButton, ButtonContainer };
