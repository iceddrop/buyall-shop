import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Signup from "../pages/Signup/Signup";
import App from "../App";
import Login from "../pages/Login/Login";
import ProductOverview from "./ProductOverview/ProductOverview";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Login /> },
            { path: "/home", element: <Homepage /> },
            { path: "/signup", element: <Signup /> },
            { path: "/productoverview", element: <ProductOverview /> },
            {path: "/category", element: <CategoryProducts/>}
        ],
    },
]);