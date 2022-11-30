import { FormControl, FormLabel, Input, Spinner } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api";
import { AuthContext } from "../../../Context/authContext";
import { UserContext, UserContextData } from "../../../Context/userContext";
import { ButtonForm, ErrorMessage, FormStyled, TitleForm, WrapperForm } from "./styles";


interface FormProps {
    title?: string,
}

interface Inputs {
    email: string,
    password: string,
}

const Form = ({ title, }: FormProps) => {

    const navigate = useNavigate();
    const { setAutenticated } = useContext(AuthContext);
    const { setUser } = useContext(UserContext)
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = inputs => handleSubmitHookForm(inputs);

    const handleSubmitHookForm = async (inputs: Inputs) => {
        await getLoggin(inputs.email, inputs.password);
    }

    const getLoggin = async (email: string, senha: string) => {
        try {
            setLoading(true);
            const params = {
                email,
                senha
            };
            const response = await api.get("usuario/login", { params });
            if (response.data.isSuccess) {
                navigate("/dashboard");
                setAutenticated(true);
                const user: UserContextData = {
                    id: response.data.data.id,
                    name: response.data.data.nome,
                    email: response.data.data.email,
                    password: response.data.data.senha,
                    phone: response.data.data.telefone,
                }
                setUser(user);
            }
            else throw new Error(response.data.message);
        } catch (error) {
            setError("email", { type: "custom", message: "Email ou senha incorretos" });
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <WrapperForm>
            <TitleForm>{title}</TitleForm>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input id="email" placeholder="Ex: email@email.com"
                        {...register("email", { required: "O email não pode ser vazio" })} />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </FormControl>
                <FormControl>
                    <FormLabel>Senha</FormLabel>
                    <Input id="password" type={"password"} placeholder="********"
                        {...register("password", { required: "A senha não pode ser vazia" })} />
                    {errors.password && <ErrorMessage >{errors.password.message}</ErrorMessage>}
                </FormControl>
                <ButtonForm type="submit">
                    {loading && <Spinner />}
                    Enviar
                </ButtonForm>
            </FormStyled>
        </WrapperForm>
    )
}

export default Form;