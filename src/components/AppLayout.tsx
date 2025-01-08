import { Outlet } from "react-router"
import NavBar from "./NavBar"
import Login from "./Login"

const AppLayout = () => {
    return (<>
        <div>
            <h1>Home</h1>
            <Login/>
            <NavBar />
            <div></div>
            <Outlet />
            <div></div>
        </div>
    </>)
}
export default AppLayout