import { FormEvent, useContext, useRef, useState } from "react"
import { UserContext } from "./UserContext";
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

const Login = ({ successLogin, typeAction, close }
    : { successLogin: Function; typeAction: string, close: Function }
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
                typeAction === "Sign"
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
        } catch (error: any) {
            if (error.status === 400 || error.status === 401) {
                alert(typeAction === "Sign" ? 'user already exists'
                    : 'user not found');
            }
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