import SVGLogo from "../../assets/imgs/SVGlogo.svg";
import { LinkWithoutStyle } from "../../assets/styles/global";
import { HeaderContainer, LinkAction, NavLink, NavOptions } from "./styles";

const Header = () => {

    return (
        <header>
            <HeaderContainer>
                <LinkWithoutStyle to={"/"}>
                    <img src={SVGLogo} alt="" />
                </LinkWithoutStyle>
                <NavOptions>
                    <NavLink href="">Explorar</NavLink>
                    <LinkAction to="/">Criar uma Campanha</LinkAction>
                </NavOptions>
            </HeaderContainer>
        </header>
    )
}

export default Header;