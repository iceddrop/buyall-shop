import React from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";
import ProtectedRoute from "./ProtectedRoutes";
import AuthRoute from "./AuthRoute";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthRoute element={<Login />} />} />
        <Route path="/signup" element={<AuthRoute element={<Signup />} />} />
        <Route path="/home" element={<ProtectedRoute element={<Homepage />} />} />
        <Route path="/productoverview" element={<ProductOverview />} />
        <Route path="/category" element={<CategoryProducts />} />
      </Routes>
    </div>
  );
}

export default App;
