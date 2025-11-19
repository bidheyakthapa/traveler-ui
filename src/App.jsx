import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import PropertyDetail from "./pages/PropertyDetail";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="mx-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </div>
  );
}

export default App;
