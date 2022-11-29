import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api, ProjectResponseProps } from "../../api";
import EditIconSVG from "../../assets/imgs/penEditSVG.svg";
import ProgressInfo from "./ProgressInfo";
import { DescriptionParagraph, EditIcon, ProjectDescription, ProjectDescriptionWrapper, ProjectDescriptionWrapperEdit, ProjectDescriptionWrapperEditLabel, ProjectTitle, ProjectTitleBackground, SectionProject } from "./styles";

const ProjectInfo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [project, setProject] = useState<ProjectResponseProps>();

    useEffect(() => {
        const handleGetProject = async () => {
            const response = await api.get<ProjectResponseProps>(`/projeto/${searchParams.get("id")}`);
            const projectResponse = response.data;
            if (projectResponse) setProject(projectResponse);
        }
        handleGetProject();
    },[])

    return (
        <SectionProject>
            <ProjectTitleBackground>
                <ProjectTitle>{project?.nome}</ProjectTitle>
            </ProjectTitleBackground>
            <ProjectDescriptionWrapper>
                <div>
                    <ProjectDescriptionWrapperEdit>
                        <ProjectDescriptionWrapperEditLabel to="/edit/project">
                            <EditIcon src={EditIconSVG} />
                            Editar
                        </ProjectDescriptionWrapperEditLabel>
                    </ProjectDescriptionWrapperEdit>
                    <ProjectDescription>Descrição do Projeto</ProjectDescription>
                    <DescriptionParagraph>
                        {project?.descricao}
                    </DescriptionParagraph>
                </div>
                <ProgressInfo />
            </ProjectDescriptionWrapper>
        </SectionProject>
    )
}

export default ProjectInfo;