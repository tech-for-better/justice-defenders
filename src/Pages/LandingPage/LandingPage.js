import React from "react";
import { useHistory } from "react-router-dom";
import isElectron from "is-electron";

import WinApp from "../../assets/win-unpacked.zip";
import JusticeDefenders from "../../assets/jf-icon.svg";

import { FullScreenSection } from "../../Components/Styles/Containers";
import {
  LandingButton,
  ButtonContainer,
  MainTitleLogo,
} from "./LandingPage.style";

const LandingPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <>
      <FullScreenSection>
        <MainTitleLogo src={JusticeDefenders} />
        <ButtonContainer>
          <LandingButton onClick={() => handleClick()}>
            Get Started!
          </LandingButton>
          {!isElectron() && (
            <a download href={WinApp}>
              <LandingButton>Download for Windows</LandingButton>
            </a>
          )}
        </ButtonContainer>
      </FullScreenSection>
    </>
  );
};

export default LandingPage;
