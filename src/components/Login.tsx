// // import { useContext, useRef, useState } from "react";
// // import { UserContext } from "./Home";
// // import { Button } from "@mui/material";

import { Button } from "@mui/material";
import { useContext, useRef } from "react";
import { UserContext } from "./UpdateDetails";


// import { useContext, useReducer, useRef, useState } from "react";
// import { Button } from "../../node_modules/@mui/material/index";
// import { UserContext } from "./Home";
// const Login = ({ onLoginSuccess }: { onLoginSuccess: Function }) => {

//     const handleSubmit = () => {
//         const nameref = useRef<HTMLInputElement>(null)
//         const [clicked, setClicked] = useState(false)
//         const passwordref = useRef<HTMLInputElement>(null)
//         const context = useContext(UserContext);
//         if (context && (context.user.firstName == nameref.current?.value && context.user.password == passwordref.current?.value)) {
//             context.userDispatch({ type: 'CREATE', data: { firstName: nameref.current?.value || '', password: passwordref.current?.value } })
//         }
//         return (<>
//             <form>
//                 <input ref={nameref} placeholder="first name" />
//                 <br />
//                 <input ref={passwordref} placeholder="password" />
//                 <br />
//                 <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />} sx={{
//                     backgroundColor: 'white',
//                     color: ' #40E0D0 ',
//                     marginTop: '15px',
//                     '&:hover': {
//                         backgroundColor: '#f5f5f5',
//                     },
//                 }}
//                 >Send</Button>


//             </form>
//         </>)

//     }
// }
// export default Login;


const Login = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
    const nameref = useRef<HTMLInputElement>(null);
    const passwordref = useRef<HTMLInputElement>(null);
    const context = useContext(UserContext);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (context && (context.user.firstName === nameref.current?.value && context.user.password === passwordref.current?.value)) {
            context.userDispatch({ type: 'CREATE', data: { firstName: nameref.current?.value || '', password: passwordref.current?.value } });
            onLoginSuccess();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={nameref} placeholder="first name" />
            <br />
            <input ref={passwordref} placeholder="password" type="password" />
            <br />
            <Button type="submit" variant="contained">Send</Button>
        </form>
    );
}
export default Login;