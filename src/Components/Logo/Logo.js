import React from "react";
import { useHistory } from "react-router-dom";

import LogoSvg from "../../assets/logo.svg";

import { LogoWrapper } from "./Logo.style";

const Logo = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/home");
  };

  return <LogoWrapper onClick={handleLogoClick} src={LogoSvg}></LogoWrapper>;
};

export default Logo;
