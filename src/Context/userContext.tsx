import { createContext, PropsWithChildren, useState } from 'react';

interface UserContextProps {
    user: UserContextData;
    setUser: React.Dispatch<React.SetStateAction<UserContextData>>;
}

export interface UserContextData {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<UserContextData>({} as UserContextData);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

