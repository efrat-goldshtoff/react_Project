// // import { createContext, useReducer, useState } from "react";
// // import UserReducer, { User } from "./User"
// // import { Box } from "@mui/material";
// // import Login from "./Login";
// // import UserAvatar from "./NameAvatar";

import { Box } from "@mui/material";
import UpdateDetails, { UserContext } from "./UpdateDetails";
import { useReducer, useState } from "react";
import { User, UserReducer } from "./User";
import Login from "./Login";
import UserAvatar from "./NameAvatar";
// import { Login } from "@mui/icons-material";



// import { createContext, useReducer, useState } from "react";
// import UserAvatar from "./NameAvatar"
// import Login from "./Login"
// import { User, UserReducer } from "./User";
// import UpdateDetails from "./UpdateDetails";
// import { Box } from "@mui/material"


// export type UserContextType = {
//     user: User;
//     userDispatch: React.Dispatch<any>;
// }
// export const UserContext = createContext<UserContextType | null>(null);


// const Home = () => {
//     const initialUser: User = {
//         firstName: "sara",
//         lastName: "sofer",
//         email: "",
//         password: "1478",
//         address: "bbb 15",
//         phone: "0527165845"
//     }
//     const [user, userDispatch] = useReducer(UserReducer, initialUser);
//     const [loginSuccess, setLoginSuccess] = useState(false);
//     const handleLoginSuccess = () => {
//         setLoginSuccess(true);
//     }
//     return (<>
//         <Box sx={{
//             position: "fixed",
//             top: 5,
//             left: 5
//         }}>
//             <UserContext.Provider value={{ user, userDispatch }}>
//                 {loginSuccess === false && <Login onLoginSuccess={handleLoginSuccess}></Login>}
//                 {loginSuccess && <UserAvatar></UserAvatar>}

//                 <div></div>
//                 {loginSuccess && <UpdateDetails></UpdateDetails>}

//         </Box>
//         {user.firstName}
//         {user.lastName}
//         {user.email}
//         {user.password}
//         {user.address}
//         {user.phone}

//     </>)
// }
// export default Home

const Home = () => {
    const initialUser: User = {
        firstName: "sara",
        lastName: "sofer",
        email: "",
        password: "1478",
        address: "bbb 15",
        phone: "0527165845"
    };

    const [user, userDispatch] = useReducer(UserReducer, initialUser);
    const [loginSuccess, setLoginSuccess] = useState(false);

    return (
        <Box sx={{ position: "fixed", top: 5, left: 5 }}>
            <UserContext.Provider value={{ user, userDispatch }}>
                {!loginSuccess && <Login onLoginSuccess={() => setLoginSuccess(true)} />}
                {loginSuccess && <UserAvatar />}
                {loginSuccess && <UpdateDetails />}
            </UserContext.Provider>
        </Box>
    );
}

export default Home;