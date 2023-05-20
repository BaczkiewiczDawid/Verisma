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
  width: 50px;
  height: 50px;
  background-color: ${props => props.isOpen ? 'black' : 'white'};
  cursor: pointer;
  z-index: 3;

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
