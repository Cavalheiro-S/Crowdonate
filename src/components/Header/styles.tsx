import styled from "styled-components";
import { LinkWithoutStyle, styles } from "../../assets/styles/global";
import { WrapperStyled } from "../Wrapper/styles";

export const HeaderContainer = styled(WrapperStyled)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    height: 100%;
`

export const NavOptions = styled.div`
    display: flex;
    gap: 24px;
`

export const NavLink = styled(LinkWithoutStyle)`
    text-decoration: none;
    color: ${styles.dark};
`

export const NavLinkLogin = styled(LinkWithoutStyle)`
    text-decoration: none;
    color: ${styles.primary};
    &:hover {
        text-decoration: underline;
    }
`

export const LinkAction = styled(LinkWithoutStyle)`
    color: ${styles.primary};
`

export const LinkLoggout = styled.a`
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    color: ${styles.primary};
    &:hover{
        text-decoration: underline;
    }
`

export const WrapperSignUser = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const ImageSignUser = styled.img``