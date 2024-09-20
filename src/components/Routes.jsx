import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Signup from "../pages/Signup/Signup";
import App from "../App";
import Login from "../pages/Login/Login";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Login /> },
            { path: "/home", element: <Homepage /> },
            { path: "/signup", element: <Signup /> },
        ],
    },
]);