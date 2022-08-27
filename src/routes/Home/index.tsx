import SVGCollaboration from "../../assets/imgs/SVGcollaborating.svg";
import { ButtonHome, ContainerHome, SubTitle, Title } from "./styles";

const Home = () => {
    return (
        <ContainerHome>
            <div>
                <Title>
                    Crownfunding para <br /> ninguém botar defeito
                </Title>
                <SubTitle>
                    Conheça e apoie campanhas que você se identifica, ou crie campanhas para se conectar com outras pessoas
                </SubTitle>
                <ButtonHome>Criar uma campanha</ButtonHome>
            </div>
            <div>
                <img src={SVGCollaboration} alt="" />
            </div>
        </ContainerHome>
    )
}

export default Home