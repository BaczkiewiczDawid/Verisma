import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  padding: 1.2rem 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    padding: 0 2rem;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ListWrapper = styled.ul`
  padding: 0;
  text-align: center;
  display: ${props => props.primary ? 'none' : 'block'};

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    display: flex;
  }
`;
