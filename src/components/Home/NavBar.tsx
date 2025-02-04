import { useContext } from "react"
import { Link } from "react-router"
import { UserContext } from "../Login/UserContext"

const style = {
    marginRight: "10px",
    color: 'purple'
}
const NavBar = () => {
    const context = useContext(UserContext);
    return (<>
        <nav style={{ position: "fixed", top: "5px", right: "50px" }}>
            <Link
                to='/'
                style={style}>
                Home
            </Link>
            <Link to='/first' style={style}>first</Link>
            <Link to='/second' style={style}>second</Link>
            <Link to='/recipes' style={style}>recipes</Link>
            {context?.user &&
                context.user.id &&
                (<Link to='/addRecipe'
                    style={{
                        marginRight: "10px",
                        color: 'purple'
                    }}>
                    addRecipe
                </Link>
                )}
        </nav>
    </>)
}
export default NavBar