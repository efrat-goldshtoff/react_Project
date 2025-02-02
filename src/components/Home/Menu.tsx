import { observer } from "mobx-react-lite"
import RecipeStore from "../Recipes/RecipesStore"
import { List, ListItemButton, Paper } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { Recipe } from "../Recipes/Recipe";

const Menu = observer(() => {
    const navigate = useNavigate();
    const handleNavigate = (recipe: Recipe) => {
        navigate(`${recipe.id}`);
    }
    return (<>
        <Paper
            style={{
                width: 250,
                position: "absolute",
                right: 20,
                top: 100
            }}>
            <h2>My Recipes!!</h2>
            <List>
                {RecipeStore.recipes.map((recipe) => (
                    <ListItemButton key={recipe.id}
                        onClick={() => handleNavigate(recipe)}
                    >
                        {recipe.title}
                    </ListItemButton>
                ))}
            </List>
        </Paper>
        <Paper
            style={{
                width: 1000,
                overflow: 'auto',
                maxHeight: '300px',
                position: "absolute",
                left: 20,
                bottom: 0,
                padding: '10px'
            }}>
            <Outlet />
        </Paper>
    </>)
}
)
export default Menu