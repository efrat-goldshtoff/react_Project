import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Recipe } from "./Recipe";

class RecipeStore {
    recipes: Recipe[] = [];
    constructor() {
        makeAutoObservable(this);
        this.getRecipes();
    }
    async getRecipes() {
        try {
            const result = await axios.get('http://localhost:3000/api/recipes/');
            this.recipes = result.data;
        } catch (error: any) {
            if (error.status == 401)
                alert("Not Good")
        }
    }
    async addRecipe(recipe: Recipe, author: string) {
        try {
            const result = await axios.post('http://localhost:3000/api/recipes/',
                {
                    title: recipe.title,
                    description: recipe.description,
                    ingredients: recipe.ingredients,
                    products: recipe.products,
                    instructions: recipe.instructions
                },
                { headers: { "user-id": author } }
            )
            this.getRecipes();
        } catch (error: any) {
            if (error.status != 201)
                alert("Recipe Not Added");
        }
    }
    getRecipeById(id: string) {
        return this.recipes.find(r => r.id == id);
    }
}
export default new RecipeStore();