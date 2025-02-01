import { useReducer, useState } from "react";
import { Button } from "@mui/material";
import { userReducer, UserType } from "../Login/User";
import Login from "../Login/Login";
import AvatarU from "../Login/AvatarU";
import { UserContext } from "../Login/UserContext";

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
    const [user, userDispatch] = useReducer(userReducer, initUser);

    const handleLoginSuccessful = () => {
        setIsLogin((now1) => {
            if (!now1) setIsOpen(false);
            return !now1
        })
    }

    return (<>
        <UserContext value={{ user, userDispatch }}>
            {!isLogin && (
                <>
                    <Button variant='contained'
                        color='secondary'
                        sx={{ mx: 2 }}
                        onClick={() => {
                            setIsOpen(true);
                            setType('Sign');
                        }}>register</Button>

                    <Button variant='contained'
                        color='secondary'
                        sx={{ mx: 2 }}
                        onClick={() => {
                            setIsOpen(true);
                            setType('Login');
                        }}>login</Button>
                </>
            )}
            {isOpen &&
                <Login
                    successLogin={handleLoginSuccessful}
                    typeAction={type}
                    close={() => setIsOpen(false)}
                />
            }
            {isLogin && <AvatarU />}
        </UserContext>
    </>)
}
export default HomePage;