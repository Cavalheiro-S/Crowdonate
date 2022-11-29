import Form from "./Form";
import FormUserSVG from "../../assets/imgs/FormUserSVG.svg";
import { WrapperUserForm } from "./styles";

const UserFormLogin = () => {


    return (
        <WrapperUserForm>
            <img src={FormUserSVG} alt="Formulário do usuário"/>
            <Form title="Login" />            
        </WrapperUserForm>
    )
}

export default UserFormLogin;