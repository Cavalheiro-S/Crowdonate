import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";
import { ButtonForm, FormStyled, TitleForm, WrapperForm } from "./styles";

interface FormProps {
    initialValues: object,
    onSubmit(values: object, formikHelpers: FormikHelpers<object>): void | Promise<any>,
    validate(values: object): void,
    title?: string,
}

const Form = ({ initialValues, validate, title, onSubmit }: FormProps) => {

    const formik = useFormik({ initialValues, onSubmit, validate: validate });

    return (
        <WrapperForm>
            <TitleForm>{title}</TitleForm>
            <FormStyled onSubmit={formik.handleSubmit}>
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