import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input, InputGroup, InputLeftAddon, Select, Spinner, Textarea
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { api, ProjectResponseProps, ResponseProps } from "../../../api";
import { UserContext } from "../../../Context/userContext";
import { CategoryProps } from "../../../enum/category";
import { ButtonForm, ButtonFormDelete, FormStyled, SpinnerLoading, TitleForm, WrapperButton, WrapperForm } from "./styles";

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

    const { register, watch, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = inputs => handleSubmitHookForm(inputs);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [searchParams,] = useSearchParams();
    const [project, setProject] = useState<ProjectResponseProps>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            try {
                setLoading(true);
                const handleGetProject = async () => {
                    const response = await api.get<ResponseProps<ProjectResponseProps>>(`/projeto/${id}/GetById`);
                    const projectResponse = response.data.data;
                    if (projectResponse) {
                        setProject(projectResponse);
                        setValue("name", projectResponse.nome);
                        setValue("description", projectResponse.descricao);
                        setValue("category", projectResponse.categoria.toString());
                        setValue("link", projectResponse.links);
                        setValue("goal", projectResponse.meta);
                    }
                }
                handleGetProject();
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
    }, [searchParams, setValue])

    const handleSubmitHookForm = async (inputs: Inputs) => {

        try {
            setLoading(true);
            const project = {
                nome: inputs.name,
                descricao: inputs.description,
                categoria: Number(inputs.category),
                links: inputs.link,
                meta: inputs.goal,
                idUsuario: user?.id,
                imagemPerfil: "",
                imagemCapa: "",
            }
            const response = await api.post("/projeto", project);
            if (response.data.isSuccess) {
                alert("Projeto cadastrado com sucesso!");
                navigate("/dashboard");
            }
            else throw new Error("Erro ao cadastrar projeto");
        }
        catch (error) {
            alert(error);
        }
        finally {
            setLoading(false);
        }
    }

    const handleDeleteProject = async () => {
        try {
            setLoading(true);
            const response = await api.delete(`/projeto/${project?.id}`);
            if (response.data.isSuccess) {
                alert("Projeto deletado com sucesso!");
                navigate("/dashboard");
            }
            else throw new Error("Erro ao deletar projeto");
        }
        catch (error) {
            alert(error);
        }
        finally {
            setLoading(false);
        }
    }

    const handleEditProject = async () => {
        try {
            setLoading(true);
            project!.nome = watch("name");
            project!.descricao = watch("description");
            project!.categoria = Number(watch("category"));
            project!.links = watch("link");
            project!.meta = watch("goal");

            const response = await api.put("/projeto", project);
            if (response.data.isSuccess) {
                alert("Projeto editado com sucesso!");
                navigate("/dashboard");
            }
            else throw new Error("Erro ao editar projeto");
        }
        catch (error) {
            alert(error);
        }
        finally {
            setLoading(false);
        }
    }

    const renderButtons = () => {
        if (project) {
            return (
                <WrapperButton>
                    <ButtonFormDelete type="button" onClick={handleDeleteProject}>Excluir</ButtonFormDelete>
                    <ButtonForm type="button" onClick={handleEditProject}>Editar</ButtonForm>
                </WrapperButton>
            )
        }
        return <ButtonForm type="submit">Criar</ButtonForm>
    }

    const renderCategoryOptions = () => {
        const options = Object.keys(CategoryProps).filter((category) => isNaN(Number(category)))
        return options.map((category, index) => {
            return <option key={index} value={index}>{category}</option>
        })
    }

    const renderForm = () => {
        if (loading)
            return (
                <>
                    <SpinnerLoading />
                    <h3>Carregando...</h3>
                </>
            )
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
                        <Textarea
                            placeholder="Escreva um breve descrição do projeto"
                            {...register("description")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Links</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="https://" />
                            <Input
                                placeholder="Ex: www.facebook.com/CozinhasSolidarias"
                                {...register("link")} />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Categoria</FormLabel>
                        <Select
                            placeholder="Selecione uma categoria"
                            {...register("category")}>
                            {renderCategoryOptions()}
                        </Select>
                        {errors.category && <FormHelperText color="red.500">{errors.category.message}</FormHelperText>}
                    </FormControl>
                    <FormControl>
                        <FormLabel>Meta Financeira</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="R$" />
                            <Input
                                placeholder="Ex: 400"
                                type="number" min="1"
                                {...register("goal", { required: "A meta tem de ser maior que 0" })} />
                        </InputGroup>
                        {errors.goal && <FormHelperText color="red.500">{errors.goal.message}</FormHelperText>}
                    </FormControl>
                    {renderButtons()}
                </FormStyled>
            </WrapperForm>
        )
    }

    return renderForm()
}

export default Form;