import { useEffect, useState } from "react";
import { ProjectResponseProps } from "../../api";
import EditIconSVG from "../../assets/imgs/penEditSVG.svg";
import { DescriptionParagraph, EditIcon, ProjectDescription, ProjectDescriptionWrapper, ProjectDescriptionWrapperEdit, ProjectDescriptionWrapperEditLabel, ProjectTitle, ProjectTitleBackground, SectionProject } from "./styles";

const ProjectInfo = () => {
    const [project, setProject] = useState<ProjectResponseProps>();

    useEffect(() => {
        const handleGetProject = async () => {
            const projectMock: ProjectResponseProps = {
                id: 1,
                idUsuario: 3,
                nome: "Projeto de teste",
                descricao: "Descrição do projeto de teste",
                categoria: 2,
                meta: "1000",
                links: "https://www.google.com.br",
                imagemCapa: "",
                imagemPerfil: "",
            }
            setProject(projectMock);
        }
        handleGetProject();
    }, [])

    return (
        <SectionProject>
            <ProjectTitleBackground>
                <ProjectTitle>{project?.nome}</ProjectTitle>
            </ProjectTitleBackground>
            <ProjectDescriptionWrapper>
                <ProjectDescriptionWrapperEdit>
                    <ProjectDescriptionWrapperEditLabel to="/edit/project">
                        <EditIcon src={EditIconSVG} />
                        Editar
                    </ProjectDescriptionWrapperEditLabel>
                </ProjectDescriptionWrapperEdit>
                <a href={project?.links}>

                </a>
                <ProjectDescription>Descrição do Projeto</ProjectDescription>
                <DescriptionParagraph>
                    {project?.descricao}
                </DescriptionParagraph>
            </ProjectDescriptionWrapper>
        </SectionProject>
    )
}

export default ProjectInfo;