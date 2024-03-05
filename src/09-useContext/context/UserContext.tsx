import { createContext } from "react";
import { User } from "../interfaces/user";

interface UserContextValue {
    user?: User;
    setUser: (user: User) => void;
}

  
export const UserContext = createContext<UserContextValue>({} as UserContextValue);

