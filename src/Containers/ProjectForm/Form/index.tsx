import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input, InputGroup, InputLeftAddon, Select, Tab, TabList,
    TabPanels, Tabs, Textarea
} from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../../api";
import { CategoryProps } from "../../../enum/category";
import { ButtonForm, FormStyled, TabPanelStyled, TitleForm, WrapperForm } from "./styles";



interface FormProps {
    title?: string,
}

interface Inputs {
    name: string,
    description: string,
    category: string,
    link: string,
    goal: string,
}

const Form = ({ title }: FormProps) => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = inputs => handleSubmitHookForm(inputs);

    const handleSubmitHookForm = async (inputs: Inputs) => {
        const project = {
            nome: inputs.name,
            descricao: inputs.description,
            categoria: Number(inputs.category),
            links: inputs.link,
            meta: inputs.goal,
            imagemPerfil: "https://i.imgur.com/4Z5wQ9u.png",
            imagemCapa: "https://i.imgur.com/4Z5wQ9u.png",
        }
        console.log(project);
        api.post("/projeto", project);
    }

    return (
        <WrapperForm>
            <TitleForm>{title}</TitleForm>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>Nome do Projeto</FormLabel>
                    <Input id="name" placeholder="Ex: Cozinhas Solidárias"
                        {...register("name", { required: "Nome não pode ser vazio" })} />
                    {errors.name && <FormHelperText color="red.500">{errors.name.message}</FormHelperText>}
                </FormControl>
                <FormControl>
                    <FormLabel>Descrição</FormLabel>
                    <Textarea placeholder="Escreva um breve descrição do projeto"
                        {...register("description")} />
                </FormControl>
                <FormControl>
                    <FormLabel>Links</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children="https://" />
                        <Input placeholder="Ex: www.facebook.com/CozinhasSolidarias"
                            {...register("link")} />
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Categoria</FormLabel>
                    <Select placeholder="Selecione uma categoria" {...register("category")}>
                        {Object.keys(CategoryProps).map((key, index) => {
                            return <option key={index} value={index + 1}>{key}</option>
                        })}
                    </Select>
                    {errors.category && <FormHelperText color="red.500">{errors.category.message}</FormHelperText>}
                </FormControl>
                <FormControl>
                    <FormLabel>Meta Financeira</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children="R$" />
                        <Input placeholder="Ex: 400" type="number" min="1"
                            {...register("goal", { required: "A meta tem de ser maior que 0" })} />
                    </InputGroup>
                    {errors.goal && <FormHelperText color="red.500">{errors.goal.message}</FormHelperText>}
                </FormControl>
                <ButtonForm type="submit">Enviar</ButtonForm>
            </FormStyled>
        </WrapperForm>
    )
}

export default Form;