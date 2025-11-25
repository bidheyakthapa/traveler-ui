import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import PropertyDetail from "./pages/PropertyDetail";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="mx-6 lg:mx-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
