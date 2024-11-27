import { createContext } from "react";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}

export const authContext = createContext<IAuthContext | null>(null);
