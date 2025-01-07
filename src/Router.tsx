import { createBrowserRouter } from "react-router";
import First from "./components/First";
import Login from "./components/Login";
import Second from "./components/Second";

export const Router =
    createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <>main error</>,
            children: [
                {
                    path: 'first', element: <First />,
                    // children: [
                    //     { path: 'bbb', element: <>I am a child of first</> }
                    // ]
                },
                {
                    path: 'second', element: <Second />
                }
            ]
        }
    ]
    )
