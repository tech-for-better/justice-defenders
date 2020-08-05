import React from "react";
import { useHistory } from "react-router-dom";

import { LogoWrapper } from "./Logo.style";

const Logo = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/home");
  };

  return (
    <LogoWrapper
      onClick={handleLogoClick}
      width="54"
      height="78"
      viewBox="0 0 54 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.6481 54.0669C42.6481 57.0352 41.9485 59.5585 40.5512 61.6355C39.1531 63.7135 37.2659 65.2848 34.8896 66.3496C32.5127 67.4151 29.8915 67.9472 27.0264 67.9472C24.0554 67.9472 21.3911 67.4406 19.0321 66.4281C16.673 65.4159 14.82 63.9664 13.4753 62.0808C12.1295 60.1952 11.439 58.0302 11.4045 55.586C11.4045 55.2717 11.5175 55.0013 11.7452 54.7741C11.9722 54.5471 12.2433 54.4337 12.5577 54.4337H19.268C19.897 54.4337 20.3244 54.5301 20.5524 54.7215C20.7791 54.9139 20.9978 55.3238 21.2075 55.9525C21.6268 57.1753 22.2904 58.0828 23.1997 58.6761C24.108 59.2704 25.3832 59.5665 27.0264 59.5665C28.9832 59.5665 30.4681 59.0689 31.4821 58.0738C32.4954 57.0786 33.0025 55.638 33.0025 53.7524V39.1391H15.0741C14.6891 39.1391 14.3574 39 14.0781 38.7199C13.798 38.4408 13.6586 38.1094 13.6586 37.7249V32.1728C13.6586 31.789 13.798 31.4576 14.0781 31.1775C14.3574 30.8984 14.6891 30.7584 15.0741 30.7584H41.2328C41.6168 30.7584 41.9485 30.8984 42.2288 31.1775C42.5079 31.4576 42.6481 31.789 42.6481 32.1728V54.0669ZM0 0V51.0228C0 65.922 12.0883 78 27 78C41.9117 78 54 65.922 54 51.0228V0H0Z"
        fill="#010F1F"
      />
      />
    </LogoWrapper>
  );
};

export default Logo;
