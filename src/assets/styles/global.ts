import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const styles = {
    primary: "#2DC653",
    dark: "#333",
    gray: "#9B9A9A"
}

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body, html{
        font-size: 16px;
        height: 100%;
        margin: 0;
    }
    h1,h2,h3,h4,span{
        font-family: 'Montserrat', sans-serif;
        color: ${styles.dark};
    }
`

export const LinkWithoutStyle = styled(Link)`
    color: inherit;
    text-decoration: none;
`