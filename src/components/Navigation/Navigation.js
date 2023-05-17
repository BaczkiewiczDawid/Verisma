import React, { useState } from "react";
import {
  Wrapper,
  HamburgerButton,
  HamburgerWrapper,
} from "./Navigation.styles";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <h2>Logo</h2>
        <NavigationLinks isPrimary={true} />
        <HamburgerButton onClick={handleOpenNav} />
      </Wrapper>
      {isOpen && (
        <HamburgerWrapper>
          <NavigationLinks/>
        </HamburgerWrapper>
      )}
    </>
  );
};

export default Navigation;
