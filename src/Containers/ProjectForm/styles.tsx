import styled from "styled-components";
import { LinkWithoutStyle, styles } from "../../assets/styles/global";

export const WrapperProjectForm = styled.section`
    display: flex;
    justify-content: center;
    padding: 2rem 4rem;
    margin: 4rem 0;
    gap: 4rem;
`

export const LinkBack = styled(LinkWithoutStyle)`
    align-self: flex-start;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid ${styles.primary};
    color: ${styles.primary};
    transition: ease all 0.1s;
    &:hover {
        background-color: ${styles.primary};
        color: #fff;
    };
`