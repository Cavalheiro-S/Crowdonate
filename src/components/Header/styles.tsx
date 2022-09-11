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

export const LinkAction = styled(LinkWithoutStyle)`
    color: ${styles.primary};
`

export const WrapperSignUser = styled.div`
    display: flex;
    gap: 24px;
`

export const ImageSignUser = styled.img`

`