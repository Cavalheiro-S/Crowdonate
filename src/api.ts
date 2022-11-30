import axios from "axios"

export interface ResponseProps<T> {
    isSuccessful: boolean,
    data?: T
    message?: string,
    errors?: Array<any>
}

export interface ProjectResponseProps {
    id: number,
    idUsuario: number,
    nome: string,
    descricao: string,
    links: string,
    meta: string,
    imagemPerfil: string,
    imagemCapa: string,
    categoria: number
}

export const api = axios.create({
    baseURL: 'https://localhost:7158/api',
})