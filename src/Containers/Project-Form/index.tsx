import FormProjectSVG from "../../assets/imgs/FormProjectSVG.svg";
import Form from "./Form";
import { WrapperProjectForm } from "./styles";

interface initialValuesType {
    name?: string,
    description?: string,
    category?: string
}

const ProjectForm = () => {

    const initialValues = {
        name: "",
        description: "",
        category: ""
    }

    const validate = (values: initialValuesType) => {
        const errors: initialValuesType = {};
        if (values.name && values.name.match(/(0-9)/g)) {
            errors.name = "Nome não pode conter número"
            console.log("Erro encontrado");
        }
    }

    return (
        <WrapperProjectForm>
            <img src={FormProjectSVG} alt="Formulário de projeto" />
            <Form initialValues={initialValues} onSubmit={() => alert("Projeto cadastrado")} validate={validate} />

        </WrapperProjectForm>
    )
}

export default ProjectForm;