import SVGLogo from "../../assets/imgs/SVGlogo.svg";
import { HeaderContainer, LinkAction, NavLink, NavOptions } from "./styles";

const Header = () => {

    return (
        <header>
            <HeaderContainer>
                <img src={SVGLogo} alt="" />
                <NavOptions>
                    <NavLink href="">Explorar</NavLink>
                    <LinkAction href="">Criar uma Campanha</LinkAction>
                </NavOptions>
            </HeaderContainer>
        </header>
    )
}

export default Header;