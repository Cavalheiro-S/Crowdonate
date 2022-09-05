import styled from "styled-components";
import { styles } from "../../../assets/styles/global";
import { ButtonStyled } from "../../../components/Button/styles";


export const WrapperProgressInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin: 24px 0;
`

export const WrapperValueEarned = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const ValueEarnedCash = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`

export const ValueEarnedLabel = styled.span`
    font-size: 1.2rem;
    color:${styles.gray};
`

export const ProgressBar = styled.div`
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 100%;
`

export const ProgressBarCompleted = styled.div<PropsStyled>`
    height: 100%;
    width: ${props => props.width}%;
    background-color: ${styles.primary};
    border-radius: 8px;
`
export const ProgressBarPercentageCompleted = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
`
export const ButtonAction = styled(ButtonStyled)`
    width: 100%;
    background-color: ${styles.primary};
    color: white;
    font-size: 1.1rem;
    border: 1px solid ${styles.primary};
    transition: ease 0.2s all;
    :hover{
        background-color: white;
        color: ${styles.primary}
    }
`
export const WrapperSupporters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`
export const WrapperSupportersText = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const SupportersValue = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${styles.primary};
`
export const SupportersLabel = styled.span`
    font-size: 1rem;
    font-weight: bold;
`

export const SupportersImage = styled.img`
    height: 48px;
`

interface PropsStyled {
    width: number
}