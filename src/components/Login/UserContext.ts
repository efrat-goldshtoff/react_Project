import { UserType } from "./User"
import { createContext } from "react";

export type UserContextT = {
    user: UserType,
    userDispatch: React.Dispatch<any>
};
export const UserContext = createContext<UserContextT | null>(null);
