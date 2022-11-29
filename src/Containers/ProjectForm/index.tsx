import FormProjectSVG from "../../assets/imgs/FormProjectSVG.svg";
import Form from "./Form";
import { WrapperProjectForm } from "./styles";

const ProjectForm = () => {

    return (
        <WrapperProjectForm>
            <img src={FormProjectSVG} alt="Formulário de projeto" />
            <Form />

        </WrapperProjectForm>
    )
}

export default ProjectForm;