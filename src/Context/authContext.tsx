import { createContext, PropsWithChildren, useState } from "react";

interface AuthContextData {
    autenticated: boolean;
    auth: AuthProps;
    setAutenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
}

interface AuthProps{
    token: string;
    expirations: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [autenticated, setAutenticated] = useState(false);
    const [auth, setAuth] = useState<AuthProps>({} as AuthProps);


    const values = {
        autenticated,
        auth,
        setAutenticated,
        setAuth
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}