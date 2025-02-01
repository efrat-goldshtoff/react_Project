import { createBrowserRouter } from "react-router";
import First from "./components/More/First";
import Second from "./components/More/Second";
import AppLayout from "./components/Home/AppLayout";
import AddRecipe from "./components/Recipes/AddRecipe";
import Menu from "./components/Home/Menu";
import RecipeDetails from "./components/Recipes/RecipeDetails";

const myRouter =
    createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <>main error</>,
            children: [
                {
                    path: '/first',
                    element: <First />
                },
                {
                    path: '/second',
                    element: <Second />
                },
                {
                    path: '/recipes',
                    element: <Menu />,
                    children:
                        [
                            {
                                path: ':id',
                                element: <RecipeDetails />
                            }
                        ]
                },
                {
                    path: '/addRecipe',
                    element: <AddRecipe />
                }
            ]
        }
    ]
    );
export default myRouter
