import React, { useState } from "react";
import {
  Wrapper,
  HamburgerWrapper,
} from "./Navigation.styles";
import NavigationLinks from "./NavigationLinks";
import Hamburger from "./Hamburger";

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
        <Hamburger isOpen={isOpen} handleOpenNav={handleOpenNav} />
        {isOpen && (
          <HamburgerWrapper>
            <NavigationLinks />
          </HamburgerWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default Navigation;
