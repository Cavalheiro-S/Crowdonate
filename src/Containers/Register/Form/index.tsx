import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ButtonForm, FormStyled, TitleForm, WrapperForm } from "./styles";

interface FormProps {
    initialValues: object,
    title?: string,
}

const Form = ({ initialValues, title, }: FormProps) => {


    return (
        <WrapperForm>
            <TitleForm>{title}</TitleForm>
            <FormStyled >
                <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input id="name" name="name" placeholder="Ex: Lucas" />
                </FormControl>
                <FormControl>
                    <FormLabel>Telefone</FormLabel>
                    <Input placeholder="Ex: 99512-6298" />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Ex: email@email.com" />
                </FormControl>
                <ButtonForm >Enviar</ButtonForm>
            </FormStyled>
        </WrapperForm>
    )
}

export default Form;