import SVGCollaboration from "../../assets/imgs/SVGcollaborating.svg";
import Card from "../../components/Card";
import { ButtonHome, ContainerHome, SubTitle, Title } from './styles';
export default function HomeContainer() {
    return (
        <>
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
            <section>
                <h3>Main Projects</h3>
                <Card title="Titulo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." author="autor"/>
            </section>
        </>
    )
}
