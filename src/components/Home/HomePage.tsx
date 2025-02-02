import { useState } from "react";
import { Box, Button } from "@mui/material";
import { UserType } from "../Login/User";
import Login from "../Login/Login";
import AvatarU from "../Login/AvatarU";

const HomePage = () => {
    const initUser: UserType = {
        id: '',
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
        phone: ''
    }
    const [isLogin, setIsLogin] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('Login');

    const handleLoginSuccessful = () => {
        setIsLogin((now1) => {
            if (!now1) setIsOpen(false);
            return !now1
        })
    }

    return (<>
        {!isLogin && (
            <Box
                sx=
                {{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    display: "flex",
                    gap: 2
                }}
            >
                <Button variant='contained'
                    color='secondary'
                    sx={{ mx: 2 }}
                    onClick={() => {
                        setIsOpen(true);
                        setType('Sign');
                    }}>Sign</Button>

                <Button variant='contained'
                    color='secondary'
                    sx={{ mx: 2 }}
                    onClick={() => {
                        setIsOpen(true);
                        setType('Login');
                    }}>login</Button>
            </Box>
        )}
        {isOpen &&
            <Login
                successLogin={handleLoginSuccessful}
                typeAction={type}
                close={() => setIsOpen(false)}
            />
        }
        {isLogin && <AvatarU />}
    </>)
}
export default HomePage;