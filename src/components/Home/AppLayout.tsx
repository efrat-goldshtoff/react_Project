import { Outlet } from "react-router"
import NavBar from "./NavBar"
// import { userReducer, UserType } from "../Login/User"
// import { UserContext } from "../Login/UserContext"
// import { useReducer } from "react"

const AppLayout = () => {
    // const initialUser: UserType = {
    //     id: '',
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     address: '',
    //     phone: ''
    // }
    // const [user, userDispatch] = useReducer(userReducer, initialUser)

    return (<>
        {/* <UserContext value={{ user, userDispatch }}> */}
            <h1 style={{ color: 'violet' }}>Home</h1>
            <NavBar />
            <Outlet />
        {/* </UserContext> */}
    </>)
}
export default AppLayout