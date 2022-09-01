import styled from "styled-components";
import { styles } from "../../../assets/styles/global";

export const WrapperPercentage = styled.div`
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 30px;
`

export const PercentageCompleted = styled.div`
    background-color: ${styles.primary};
    height: 100%;
    border-radius: 8px;
`

interface PropsStyled{
    width: string | null
}