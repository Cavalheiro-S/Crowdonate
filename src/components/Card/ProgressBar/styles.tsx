import styled from "styled-components";
import { styles } from "../../../assets/styles/global";

export const WrapperPercentage = styled.div`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 16px;
    margin: 12px 0;
`

export const PercentageCompleted = styled.div<PropsStyled>`
    background-color: ${styles.primary};
    height: 100%;
    width: ${props => props.width}%;
    border-radius: 8px;
`

export const WrapperEarnedValue = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`

export const WrapperEarnedValueText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
`

export const EarnedValueTitle = styled.span`
    font-size: 0.8rem;
    color: ${styles.gray};
`

export const EarnedValueMoney = styled.span`
    font-size: 1rem;
    font-weight: bold;
`

interface PropsStyled {
    width: number | null
}