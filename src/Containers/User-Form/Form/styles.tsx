import styled from "styled-components";
import { styles } from "../../../assets/styles/global";
import Button from "../../../components/Button";
import { ButtonStyled } from "../../../components/Button/styles";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 400px;
`

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const TitleForm = styled.h3`
    font-size: 1.5rem;
`

export const ButtonForm = styled(ButtonStyled)`
    border: 1px solid ${styles.primary};
    background-color: ${styles.primary};
    padding: 8px;
    font-size: 1rem;
    color: white;
    :hover{
        background-color: white;
        color: ${styles.primary};
    }
`