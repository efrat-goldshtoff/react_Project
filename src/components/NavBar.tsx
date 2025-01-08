import { Link } from "react-router"

const NavBar=()=>{
    return (<>
    <div></div>
    <nav style={{position:"fixed",top: "5px",right:"50px"}}>
        <Link to='/'style={{marginRight:"10px"}}>Home</Link>
        <Link to='/first'style={{marginRight:"10px"}}>first</Link>
        <Link to='/second'style={{marginRight:"10px"}}>second</Link>

    </nav>
    </>)
}
export default NavBar