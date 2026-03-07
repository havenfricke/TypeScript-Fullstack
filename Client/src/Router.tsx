import { createBrowserRouter } from "react-router-dom";
import App  from "./App";
import HomePage  from "./Pages/HomePage";
import ExamplesPage  from "./Pages/ExamplesPage";
import ErrorPage  from "./Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/examples",
                element: <ExamplesPage />
            }
        ]
    }
])