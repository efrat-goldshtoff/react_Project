import { useParams } from "react-router"
import { observer } from "mobx-react-lite";
import RecipeStore from "./RecipesStore";

const RecipeDetails = observer(() => {
    const { id } = useParams();
    if (!id)
        return <div>Recipe not found</div>
    const recipe = RecipeStore.getRecipeById(id);

    return (<>
        {recipe && (
            <div>
                <div>
                    <h3>{recipe.title}</h3>
                    <h4> Description:</h4>
                    <p>
                        {recipe.description}

                    </p>

                </div>
                <div>
                    <h4>Ingredients:</h4>
                    <p>
                        {recipe.ingredients.join(", ")}
                    </p>
                </div>
                <div>
                    <h4>Instructions:</h4>
                    <p>{recipe.instructions}</p>
                </div>
            </div>
        )}
    </>
    )
})
export default RecipeDetails