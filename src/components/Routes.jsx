import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Signup from "../pages/Signup/Signup";
import App from "../App";
import Login from "../pages/Login/Login";
import ProductOverview from "./ProductOverview/ProductOverview";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";
import CartPage from "../pages/CartPage/CartPage";
import CartOverview from "../pages/CartPage/CartOverview";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          { index: true, element: <Login /> }, 
          { path: "home", element: <Homepage /> },
          { path: "signup", element: <Signup /> },
          { path: "productoverview", element: <ProductOverview /> },
          { path: "cartoverview", element: <CartOverview /> },
          { path: "category", element: <CategoryProducts /> },
          { path: "cart", element: <CartPage /> },
          { path: "*", element: <div>Page Not Found</div> },
        ],
      },
]);