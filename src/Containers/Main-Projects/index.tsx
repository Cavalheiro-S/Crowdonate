import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, ProjectResponseProps } from "../../api";
import Card from "../../components/Card";
import { CategoryProps } from "../../enum/category";
import { NoDataContainer, NoDataImg, NoDataText, SectionMainProjects, TitleSection, WrapperCards } from "./styles";
import noDataSVG from "../../assets/imgs/no_data.svg";
const MainProjects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState<ProjectResponseProps[]>([]);

    useEffect(() => {
        const handleGetProjects = async () => {
            const response = await api.get<ProjectResponseProps[]>("/projeto")
            const projectsResponse = response.data;
            if (projectsResponse.length > 0) setProjects(projectsResponse);
        }
        handleGetProjects();
    }, []);


    const handleRenderProjects = () => {
        if (projects.length > 0) {
            return projects.map((project, index) => {
                return (
                    <Card
                        key={index}
                        onClick={() => navigate(`/project?id=${project.id}`)}
                        title={project.nome}
                        description={project.descricao}
                        author={CategoryProps["Arquitetura e Urbanismo"]} />
                )
            })
        }
        return (
            <NoDataContainer>
                <NoDataImg src={noDataSVG} alt="" />
                <NoDataText>Nenhum projeto encontrado</NoDataText>
            </NoDataContainer>
        )
    }

    return (
        <SectionMainProjects>
            <TitleSection>Principais Projetos</TitleSection>
            <WrapperCards>
                {handleRenderProjects()}
            </WrapperCards>
        </SectionMainProjects>
    )
}

export default MainProjects;