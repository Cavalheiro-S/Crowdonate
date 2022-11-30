import SVGCollaboration from "../../assets/imgs/SVGcollaborating.svg";
import { LinkWithoutStyle } from "../../assets/styles/global";
import MainProjects from "../MainProjects";
import { ButtonHome, ContainerHome, SubTitle, Title, WrapperImage, WrapperTitle } from './styles';
export default function HomeContainer() {
    return (
        <>
            <ContainerHome>
                <WrapperTitle>
                    <Title>
                        Crownfunding para <br /> ninguém botar defeito
                    </Title>
                    <SubTitle>
                        Conheça e apoie campanhas que você se identifica, ou crie campanhas para se conectar com outras pessoas
                    </SubTitle>
                    <LinkWithoutStyle to="/new/project">
                        <ButtonHome>
                            Criar um Projeto
                        </ButtonHome>
                    </LinkWithoutStyle>
                </WrapperTitle>
                <WrapperImage>
                    <img src={SVGCollaboration} alt="" />
                </WrapperImage>
            </ContainerHome>
            <MainProjects />
        </>
    )
}
