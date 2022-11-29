import Form from "./Form";
import FormUserSVG from "../../assets/imgs/FormUserSVG.svg";
import { WrapperUserForm } from "./styles";

const UserForm = () => {

    const initialValues = {
        name: "",
        phone: "",
        email: ""
    }

    return (
        <WrapperUserForm>
            <img src={FormUserSVG} alt="Formulário do usuário" />
            <Form title="Cadastro de Usuário" initialValues={initialValues} />
        </WrapperUserForm>
    )
}

export default UserForm;