import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="mx-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
