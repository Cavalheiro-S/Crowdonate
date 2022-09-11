import LogoSVG from "../../assets/imgs/LogoSVG.svg";
import UserIcon from "../../assets/imgs/UserIconSVG.svg";
import { LinkWithoutStyle } from "../../assets/styles/global";
import { HeaderContainer, ImageSignUser, LinkAction, NavLink, NavOptions, WrapperSignUser } from "./styles";

const Header = () => {

    return (
        <header>
            <HeaderContainer>
                <LinkWithoutStyle to="">
                    <img src={LogoSVG} alt="Logo do site" />
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