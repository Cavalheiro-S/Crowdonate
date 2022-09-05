import { FooterStyled, ImageLogo } from "./styles";
import Logo from "../../assets/imgs/SVGLogoWhite.svg";

const Footer = () => {

    return(
        <FooterStyled>
            <ImageLogo src={Logo}/>
        </FooterStyled>
    )
}

export default Footer;