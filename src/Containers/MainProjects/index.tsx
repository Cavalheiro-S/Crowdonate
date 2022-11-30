import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, ProjectResponseProps, ResponseProps } from "../../api";
import Card from "../../components/Card";
import { CategoryProps } from "../../enum/category";
import { NoDataContainer, NoDataImg, NoDataText, SectionMainProjects, TitleSection, WrapperCards } from "./styles";
import noDataSVG from "../../assets/imgs/no_data.svg";
import { UserContext } from "../../Context/userContext";
const MainProjects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState<ProjectResponseProps[]>([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const handleGetProjects = async () => {
            const response = await api.get<ResponseProps<ProjectResponseProps[]>>(`/projeto/${user.id}/GetByIdUsuario`);
            const projectsResponse = response.data.data;
            if (projectsResponse)
                setProjects(projectsResponse);
        }
        handleGetProjects();
        // eslint-disable-next-line 
    }, []);


    const renderProjects = () => {
        if (projects.length > 0) {
            return projects.map((project, index) => {
                return (
                    <Card
                        key={index}
                        onClick={() => navigate(`/edit/project?id=${project.id}`)}
                        title={project.nome}
                        description={project.descricao}
                        goal={Number(project.meta)}
                        author={CategoryProps[project.categoria]} />
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
                {renderProjects()}
            </WrapperCards>
        </SectionMainProjects>
    )
}

export default MainProjects;