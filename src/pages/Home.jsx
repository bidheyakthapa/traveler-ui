import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import Destinations from "../components/Destinations";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Note from "../components/Note";
import PopularHotels from "../components/PopularHotels";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Note />
      <Destinations />
      <Blog />
      <PopularHotels />
      <Download />
      <h1 className="text-center font-bold text-2xl mt-16 mb-4">
        Explore the world with My Dream place
      </h1>
      <p className="text-center text-blue-500 cursor-pointer mb-12">
        Discover new places and experiences
      </p>
      <Footer />
    </div>
  );
};

export default Home;
