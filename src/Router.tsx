import { createBrowserRouter } from "react-router";
import First from "./components/First";
import Second from "./components/Second";
import AppLayout from "./components/AppLayout";

const myRouter =
    createBrowserRouter([
        {
            path: '/',
            element: <AppLayout/>,//<Login />,
            errorElement: <>main error</>,
            children: [
                {
                    path: 'first', element: <First />,
                    children: [
                        { path: 'bbb', element: <>I am a child of first</> }
                    ]
                },
                {
                    path: 'second', element: <Second />
                }
            ]
        }
    ]
    )
export default myRouter
