import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const HamburgerButton = styled.div`
  width: 40px;
  height: 5px;
  /* background-color: ${(props) => (props.isOpen ? "black" : "white")}; */
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: 1rem;
  z-index: 3;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 40px;
    height: 5px;
    background-color: ${(props) => (props.isOpen ? "black" : "white")};
    position: absolute;
    left: 0;
    top: ${(props) => (props.isOpen ? "0" : "-12px")};
    border-radius: 1rem;
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "none")};
    transition: .5s;
  }

  &::after {
    top: ${(props) => (props.isOpen ? "0" : "12px")};
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "none")};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
