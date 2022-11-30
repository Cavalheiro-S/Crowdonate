import { useContext } from "react";
import { useNavigate } from "react-router";
import LogoSVG from "../../assets/imgs/LogoSVG.svg";
import UserIcon from "../../assets/imgs/UserIconSVG.svg";
import { LinkWithoutStyle } from "../../assets/styles/global";
import { AuthContext } from "../../Context/authContext";
import { UserContext } from "../../Context/userContext";
import { HeaderContainer, ImageSignUser, LinkLoggout, NavLink, NavLinkLogin, NavOptions, WrapperSignUser } from "./styles";

const Header = () => {
    const { autenticated, setAutenticated } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setAutenticated(false);
        navigate("/login");
    }


    const handleLogoClick = (): string => {
        if (autenticated) {
            return "/dashboard";
        } else {
            return "/login";
        }
    }

    const handleLogged = () => {
        if (!autenticated) {
            return (
                <>
                    <WrapperSignUser>
                        <ImageSignUser src={UserIcon} alt="ícone de usuário" />
                        <NavLinkLogin to="/login">Login</NavLinkLogin>
                        <NavLink to="/signin">Cadastrar</NavLink>
                    </WrapperSignUser>
                </>
            )
        }
        return (
            <>
                <NavOptions>
                    <NavLinkLogin to="/dashboard">Dashboard</NavLinkLogin>
                </NavOptions>
                <WrapperSignUser>
                    <ImageSignUser src={UserIcon} alt="ícone de usuário" />
                    <h3>Logado como {user?.name}</h3>
                    <LinkLoggout onClick={handleLogout}>Sair</LinkLoggout>
                </WrapperSignUser>
            </>
        )
    }

    return (
        <header>
            <HeaderContainer>
                <LinkWithoutStyle to={handleLogoClick()}>
                    <img src={LogoSVG} alt="Logo do site" />
                </LinkWithoutStyle>
                {handleLogged()}
            </HeaderContainer>
        </header>
    )
}

export default Header;