import styled from "styled-components";
import { styles } from "../../assets/styles/global";

export const FooterStyled = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: ${styles.primary};
    height: 200px;
    padding: 24px;
`

export const ImageLogo = styled.img`
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: center;
`