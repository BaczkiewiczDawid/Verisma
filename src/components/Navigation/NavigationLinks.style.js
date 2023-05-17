import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  padding: 1.2rem 0;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
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

export const ListWrapper = styled.ul`
  padding: 0;
  text-align: center;
  display: ${props => props.primary ? 'none' : 'block'};

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
