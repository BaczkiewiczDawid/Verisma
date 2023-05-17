import React, { useState } from "react";
import {
  Wrapper,
  HamburgerButton,
  HamburgerWrapper,
  ListWrapper,
  ListItem,
  Link
} from "./Navigation.styles";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <h2>Logo</h2>
        <ListWrapper>
            <ListItem>
                <Link href="#">Link 1</Link>
            </ListItem>
            <ListItem>
                <Link href="#">Link 2</Link>
            </ListItem>
            <ListItem>
                <Link href="#">Link 3</Link>
            </ListItem>
        </ListWrapper>
        <HamburgerButton onClick={handleOpenNav} />
      </Wrapper>
      {isOpen && (
        <HamburgerWrapper>
          <ListWrapper>
            <ListItem
            >
              <Link href="#">Link 1 asdsad</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Link 2</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Link 3asdasd </Link>
            </ListItem>
          </ListWrapper>
        </HamburgerWrapper>
      )}
    </>
  );
};

export default Navigation;
