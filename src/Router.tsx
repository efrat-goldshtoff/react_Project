import { createBrowserRouter } from "react-router";
import First from "./components/First";
import Second from "./components/Second";
import AppLayout from "./components/AppLayout";
// import HomePage from "./components/HomePage";

const myRouter =
    createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,//<Login />,
            errorElement: <>main error</>,
            children: [
                // {
                //     path: '/', element: <HomePage />
                // },
                {
                    path: 'first', element: <First />
                },
                {
                    path: 'second', element: <Second />
                }
            ]
        }
    ]
    )
export default myRouter
