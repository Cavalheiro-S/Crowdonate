import { ContainerNotFound, ImageNotFound, TitleNotFound } from "./styles";
import Image404 from "../../assets/imgs/page404.svg";

export const NotFound = () => {
    return (
        <ContainerNotFound>
            <ImageNotFound src={Image404}/>
            <TitleNotFound>Página não encontrada</TitleNotFound>
        </ContainerNotFound>
    );
};
