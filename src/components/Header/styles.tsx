import styled from "styled-components";
import { styles } from "../../assets/styles/global";
import { ContainerStyled } from "../Container/styles";

export const HeaderContainer = styled(ContainerStyled)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

export const NavOptions = styled.div`
    display: flex;
    gap: 24px;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: ${styles.dark}
`

export const LinkAction = styled(NavLink)`
    color: ${styles.primary};
`