import React from "react";
import { HamburgerButton, Wrapper } from "./Hamburger.style";

const Hamburger = ({ isOpen, handleOpenNav }) => {
  return (
    <Wrapper onClick={handleOpenNav}>
      <HamburgerButton isOpen={isOpen} />
    </Wrapper>
  );
};

export default Hamburger;
