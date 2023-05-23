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



export const HamburgerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    display: none;
  }
`;
