import { useParams } from "react-router"

const PName = () => {
    const { name } = useParams();
    return (<>
        <h1>person name:</h1>
        <h3>{name}</h3>
    </>)
}
export default PName;