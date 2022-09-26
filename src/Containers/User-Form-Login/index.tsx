import Form from "./Form";
import FormUserSVG from "../../assets/imgs/FormUserSVG.svg";
import { WrapperUserForm } from "./styles";

interface initialValuesType {
    name?: string,
    phone?: string,
    email?: string,
    password?: string
}

const UserFormLogin = () => {

    const initialValues = {
        name: "",
        phone: "",
        email: "",
        password: ""
    }

    const validate = (values: initialValuesType) => {
        const errors: initialValuesType = {};
        if (values.name && values.name.match(/(0-9)/g)) {
            errors.name = "Nome não pode conter número"
            console.log("Erro encontrado");
            
        }
    }

    return (
        <WrapperUserForm>
            <img src={FormUserSVG} alt="Formulário do usuário"/>
            <Form title="Login de Usuário" initialValues={initialValues} validate={validate} onSubmit={() => {alert("Usuario Logado");}} />
        </WrapperUserForm>
    )
}

export default UserFormLogin;