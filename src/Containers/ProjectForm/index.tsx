import FormProjectSVG from "../../assets/imgs/FormProjectSVG.svg";
import Form from "./Form";
import { LinkBack, WrapperProjectForm } from "./styles";

const ProjectForm = () => {

    return (
        <WrapperProjectForm>
            <LinkBack to="/dashboard">
                Voltar
            </LinkBack>
            <img src={FormProjectSVG} alt="Formulário de projeto" />
            <Form />
        </WrapperProjectForm>
    )
}

export default ProjectForm;