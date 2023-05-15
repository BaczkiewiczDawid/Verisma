import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

    * {
        box-sizing: border-box;
    }

    body, html {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
`;