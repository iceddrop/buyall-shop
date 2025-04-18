import React from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";
import ProtectedRoute from "./ProtectedRoutes";
import SuccessPage from "./pages/Orderstatus/SuccessPage";
import CartPage from "./pages/CartPage/CartPage";
import CartOverview from "./pages/CartPage/CartOverview";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute element={<Homepage />} />} />
        <Route path="/productoverview" element={<ProductOverview />} />
        <Route path="/cartoverview" element={<CartOverview />} />
        <Route path="/category" element={<CategoryProducts />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/ordersuccess" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
