import styled from "styled-components"
import { styles } from "../../assets/styles/global"
import { ButtonStyled } from "../../components/Button/styles"

export const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    width: 100%;
    height: 90vh;
`

export const Title = styled.h1`
    font-size: 4rem;
    font-family: "Montserrat", sans-serif;
`

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-family: "Montserrat", sans serif;
    line-height: 32px;
    font-weight: normal;
    max-width: 500px;
`

export const ButtonHome = styled(ButtonStyled)`
    background-color: ${styles.primary};
    border: 1px solid ${styles.primary};
    font-family: "Roboto", sans serif;
    color: #fff;
    font-weight: bold;
    transition: 0.2s ease all;

    :hover{
        background-color: #fff;
        color: ${styles.primary};
    }
`

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction:column;
    align-self: flex-start;
    gap: 40px;
`

export const WrapperImage = styled.div`
    align-self: center;
`
