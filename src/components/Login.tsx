import { FormEvent, useContext, useRef, useState } from "react"
import { UserContext } from "./userContext";
import axios from "axios";
import { Box, Button, Modal, TextField } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

const Login = ({ successLogin, typeAction, close }:
    { successLogin: Function; typeAction: string, close: Function }
) => {
    const context = useContext(UserContext);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(true);
    const [userId, setUserId] = useState<string>();
    const handleSubmitLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const link =
                typeAction === 'Sign'
                    ? "http://localhost:3000/api/user/register"
                    : "http://localhost:3000/api/user/login";
            const result = await axios.post(link, {
                firstName: firstNameRef.current?.value,
                password: passwordRef.current?.value
            });
            setUserId(result.data.userId);
            context?.userDispatch({
                type: 'CREATE',
                data: {
                    id: result.data.userId,
                    firstName: firstNameRef.current?.value || '',
                    password: passwordRef.current?.value || ''
                }
            });
            setOpen(false);
            successLogin();
        } catch (e: any) {
            if (e.status === 400 || e.status === 401) {
                alert(typeAction === "Sign" ? 'user already exists'
                    : 'user not found');
            }
            console.error(e);
        }
    }
    return (<>
        <Modal
            open={open}
            onClose={() => close()}
            aria-labelledby='modal-modal-title'
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={handleSubmitLogin}>
                    <TextField label='userName'
                        inputRef={firstNameRef}
                        fullWidth
                        sx={{ mb: 2 }} />
                    <TextField label='password'
                        inputRef={passwordRef}
                        type="password"
                        fullWidth
                        sx={{ mb: 2 }} />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            background: 'black',
                            color: 'white',
                            borderRadius: '10px',
                            border: '2px solid white'
                        }}
                    >
                        {typeAction}
                    </Button>
                </form>
            </Box>
        </Modal>
    </>)

}
export default Login;






// export const userContext = createContext<[UserType, Dispatch<Action>]>([
//     {} as UserType,
//     () => { }
// ]);
// const Login = () => {
//     const [user, userDispatch] = useReducer(userReducer, {} as UserType);
//     const [isLogin, setIsLogin] = useState(false);
//     const [open, setOpen] = useState(false);
//     const handleClose = () => setOpen(false);

//     const nameRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);

//     const handleSubmit = () => {
//         userDispatch(
//             {
//                 type: 'ADD',
//                 data: {
//                     firstName: nameRef.current?.value || "",
//                     lastName: '',
//                     password: passwordRef.current?.value || "",
//                     address: '',
//                     email: '',
//                     phone: ''
//                 }
//             }
//         )
//     }

//     return (<>
//         <userContext.Provider value={[user, userDispatch]}>
//             {/* <Grid2 container> */}
//                 <Grid2 size={4}>
//                     {!isLogin ? (
//                         <Button color="secondary" variant="contained" sx={{
//                             position: "absolute",
//                             top: "15px",
//                             left: "15px"
//                         }}
//                             onClick={() => { setOpen(!open) }}>
//                             Login
//                         </Button>
//                     ) : (
//                         <ShowName />
//                     )}
//                 </Grid2>
//             {/* </Grid2> */}

//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         הכנס/י פרטים
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         <TextField label="שם" inputRef={nameRef} />
//                         <TextField type="password" label="סיסמא" inputRef={passwordRef} sx={{ mt: 2 }} />
//                         <Button
//                             onClick={() => {
//                                 handleSubmit();
//                                 setOpen(false);
//                                 setIsLogin(true);
//                             }}
//                             sx={{ mt: 2 }}
//                         >
//                             Login
//                         </Button>
//                     </Typography>
//                 </Box>
//             </Modal>
//         </userContext.Provider>
//     </>)
// }
// export default Login;
