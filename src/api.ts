import axios from "axios"

export interface ErrorResponseProps{
    isSuccessful: boolean,
    message: string,
    errors: Array<any>
}

export interface TokenResponseProps{
    acess_token: string,
    expirations: string,
}

export interface ProjectResponseProps{
    id: number,
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