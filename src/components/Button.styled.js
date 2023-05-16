import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: .9rem;
    border: none;
    padding: .8rem 2.8rem;
    border-radius: 2px;
    cursor: pointer;
`;