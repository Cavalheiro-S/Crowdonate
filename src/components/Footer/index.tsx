import { FooterStyled, ImageLogo } from "./styles";
import LogoSVG from "../../assets/imgs/LogoSVG.svg";

const Footer = () => {

    return(
        <FooterStyled>
            <ImageLogo src={LogoSVG}/>
        </FooterStyled>
    )
}

export default Footer;