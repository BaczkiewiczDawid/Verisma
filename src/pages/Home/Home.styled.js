import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -999;
  top: 0;
  left: 0;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
    color: ${({ theme }) => theme.colors.white};
    z-index: 1;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
    margin-top: 20rem;
    font-size: 1.3rem;
    width: 80%;
    margin: 20rem auto 0 auto;
`;