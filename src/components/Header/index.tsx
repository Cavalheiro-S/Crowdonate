import SVGLogo from "../../assets/imgs/SVGLogo.svg";
import { LinkWithoutStyle } from "../../assets/styles/global";
import { HeaderContainer, ImageSignUser, LinkAction, NavLink, NavOptions, WrapperSignUser } from "./styles";
import UserIcon from "../../assets/imgs/UserIconSVG.svg";

const Header = () => {

    return (
        <header>
            <HeaderContainer>
                <LinkWithoutStyle to={"/"}>
                    <img src={SVGLogo} alt="" />
                </LinkWithoutStyle>
                <NavOptions>
                    <NavLink to="">Explorar</NavLink>
                    <LinkAction to="/new/project">Criar uma Campanha</LinkAction>
                </NavOptions>

                <WrapperSignUser>
                    <ImageSignUser src={UserIcon} alt="ícone de usuário" />
                    <NavLink to="/new/user">Cadastrar Usuário</NavLink>
                </WrapperSignUser>

            </HeaderContainer>
        </header>
    )
}

export default Header;