import { createContext, Dispatch, useReducer, useRef, useState } from "react"
import { Action, userReducer, UserType } from "./User"
import { Box, Button, Grid2, Modal, TextField, Typography } from "@mui/material";
import ShowName from "./ShowName";

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
export const userContext = createContext<[UserType, Dispatch<Action>]>([
    {} as UserType,
    () => { }
]);
const Login = () => {
    const [user, userDispatch] = useReducer(userReducer, {} as UserType);
    const [isLogin, setIsLogin] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        userDispatch(
            {
                type: 'ADD',
                data: {
                    firstName: nameRef.current?.value || "",
                    lastName: '',
                    password: passwordRef.current?.value || "",
                    address: '',
                    email: '',
                    phone: ''
                }
            }
        )
    }

    return (<>
        <userContext.Provider value={[user, userDispatch]}>
            <Grid2 container>
                <Grid2 size={4}>
                    {!isLogin ? (
                        <Button color="secondary" variant="contained" sx={{
                            position: "absolute",
                            top: "15px",
                            left: "15px"
                        }}
                            onClick={() => { setOpen(!open) }}>
                            Login
                        </Button>
                    ) : (
                        <ShowName />
                    )}
                </Grid2>
            </Grid2>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        הכנס/י פרטים
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField label="שם" inputRef={nameRef} />
                        <TextField label="סיסמא" inputRef={passwordRef} sx={{ mt: 2 }} />
                        <Button
                            onClick={() => {
                                handleSubmit();
                                setOpen(false);
                                setIsLogin(true);
                            }}
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </userContext.Provider>
    </>)
}
export default Login;
