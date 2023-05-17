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
  background-color: white;
  cursor: pointer;
  z-index: 3;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ListWrapper = styled.ul`
  padding: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1.2rem 0;

  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.white};
  }
`;
