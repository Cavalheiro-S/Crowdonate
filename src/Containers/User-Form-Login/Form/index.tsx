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
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Ex: email@email.com" />
                </FormControl>
                <FormControl>
                    <FormLabel>Senha</FormLabel>
                    <Input type={"password"} placeholder="********" />
                </FormControl>
                <ButtonForm >Enviar</ButtonForm>
            </FormStyled>
        </WrapperForm>
    )
}

export default Form;