import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    InputLeftAddon,
    InputGroup
} from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";
import { ButtonForm, FormStyled, TabPanelStyled, TitleForm, WrapperForm } from "./styles";

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
                <Tabs>
                    <TabList>
                        <Tab>Informações de Descrição</Tab>
                        <Tab>Informações de Finalização</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanelStyled>
                            <FormControl>
                                <FormLabel>Nome do Projeto</FormLabel>
                                <Input id="name" name="name" placeholder="Ex: Cozinhas Solidárias" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Descrição</FormLabel>
                                <Textarea placeholder="Escreva um breve descrição do projeto" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Categoria</FormLabel>
                                <Select placeholder="Selecione uma categoria">
                                    <option value="food">Comida</option>
                                    <option value="music">Música</option>
                                    <option value="film">Filme</option>
                                </Select>
                            </FormControl>
                        </TabPanelStyled>
                        <TabPanelStyled>
                            <FormControl>
                                <FormLabel>Data final do projeto</FormLabel>
                                <Input type={"date"} name="dateFinalProject" placeholder="Selecione uma data" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Meta Financeira</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children="R$" />
                                    <Input placeholder="Ex: 400" />
                                </InputGroup>
                            </FormControl>

                        </TabPanelStyled>
                    </TabPanels>
                </Tabs>
                <ButtonForm >Enviar</ButtonForm>
            </FormStyled>
        </WrapperForm>
    )
}

export default Form;