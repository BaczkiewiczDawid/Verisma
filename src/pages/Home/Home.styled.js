import styled from "styled-components";

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  height: 100vh;
`;

export const Container = styled.div`
  margin: 15rem auto 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};

  h2 {
    margin: 2rem 0;
    font-size: 1.7rem;
  }
`;

export const SectionBox = styled.div`
  margin: 2rem auto;
  width: 80%;

  p {
    line-height: 1.2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    display: flex;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
