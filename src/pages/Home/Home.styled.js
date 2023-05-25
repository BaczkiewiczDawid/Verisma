import styled from "styled-components";

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  height: 100vh;
`;

export const Container = styled.div`
  margin: 15rem auto 0 auto;

  h1 {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    h1 {
      font-size: 3rem;
    }
  }
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

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    min-height: 50vh;
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
    align-items: flex-start;
    width: 70%;
    justify-content: space-between;
    margin: 10rem auto;

    h2 {
      min-width: 40%;
      max-width: 45%;
      margin: 0;
      text-align: start;
      font-size: 2.6rem;
    }

    p {
      width: 40%;
      text-align: start;
      line-height: 1.4rem;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    flex-direction: ${(props) => (props.secondary ? "row-reverse" : "row")};
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 5rem auto;

  p {
    padding: 1.5rem 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: 50%;
    margin: 0;

    p {
      padding: 1.5rem 4rem;
    }
  }
`;

export const ArticleImage = styled.div`
  width: auto;
  height: 50%;
  object-fit: cover;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: 50%;
    height: 100vh;

    img {
      width: 50vw;
      height: 100vh;
    }
  }
`;
