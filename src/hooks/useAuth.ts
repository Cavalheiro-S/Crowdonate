import { useContext, useEffect } from "react"
import { api } from "../api"
import { AuthContext } from "../Context/authContext"


export const useAuth = () => {
    const { autenticated, auth } = useContext(AuthContext)


    useEffect(() => {
        if (auth.token) {
            console.log("Expira em : " + new Date(auth.expirations));
            console.log("Data atual: " + new Date());
            //new Date(auth.expirations) < new Date()
            api.defaults.headers.Authorization = `Bearer ${auth.token}`
        }
    }, [auth.token])

    return api;
}