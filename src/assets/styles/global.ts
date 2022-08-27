import { createGlobalStyle } from "styled-components";

export const styles = {
    primary: "#2DC653",
    dark: "#333"
}

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }
    body, html, #root{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        height: 100%;
        margin: 0;
    }
    h1,h2,h3,h4{
        color: ${styles.dark};
    }
`