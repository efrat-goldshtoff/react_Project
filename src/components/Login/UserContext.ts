import { createContext } from "react";
import { UserType } from "./User"

export type UserContextT = {
    user: UserType,
    userDispatch: React.Dispatch<any>
};
export const UserContext = createContext<UserContextT | null>(null);
