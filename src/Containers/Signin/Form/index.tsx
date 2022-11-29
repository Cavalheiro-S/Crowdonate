import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, TokenResponseProps } from "../../../api";
import { AuthContext } from "../../../Context/authContext";
import { useAuth } from "../../../hooks/useAuth";
import { ButtonForm, ErrorMessage, FormStyled, TitleForm, WrapperForm } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormProps {
    title?: string,
}

interface Inputs {
    email: string,
    password: string,
}

const Form = ({ title, }: FormProps) => {

    const navigate = useNavigate();
    const { setAuth, setAutenticated } = useContext(AuthContext);
    const apiAuth = useAuth();

    const { register, watch, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = inputs => handleSubmitHookForm(inputs);

    const handleSubmitHookForm = async (inputs: Inputs) => {
        //await getToken();
        setAutenticated(true);
        navigate("/dashboard");
    }

    const getToken = async () => {
        try {
            const formData = new FormData();
            formData.append("Email", watch("email"));
            formData.append("Senha", watch("password"));
            const response = await api.post<TokenResponseProps>("/usuario/token", formData);
            setAuth({ token: response.data.acess_token, expirations: response.data.expirations });

            navigate("/dashboard");
        } catch (error) {
            console.log({ email: "Email ou senha inválidos" });
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
                <ButtonForm type="submit">Enviar</ButtonForm>
            </FormStyled>
        </WrapperForm>
    )
}

export default Form;