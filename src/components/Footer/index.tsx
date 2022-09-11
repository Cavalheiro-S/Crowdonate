import { FooterStyled, ImageLogo } from "./styles";
import Logo from "../../assets/imgs/SVGLogo.svg";

const Footer = () => {

    return(
        <FooterStyled>
            <ImageLogo src={Logo}/>
        </FooterStyled>
    )
}

export default Footer;