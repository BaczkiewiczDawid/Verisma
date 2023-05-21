import styled from "styled-components";

export const HamburgerButton = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: 1rem;
  z-index: 3;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${(props) => (props.isOpen ? "black" : "white")};
    position: absolute;
    left: 0;
    top: ${(props) => (props.isOpen ? "0" : "-12px")};
    border-radius: 1rem;
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "none")};
    transition: 0.5s;
  }

  &::after {
    top: ${(props) => (props.isOpen ? "0" : "12px")};
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "none")};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
    cursor: pointer;
    width: 2.5rem;
    height: auto;
`;