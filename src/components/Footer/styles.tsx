import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 200px;
    padding: 24px;
`

export const ImageLogo = styled.img`
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: center;
`