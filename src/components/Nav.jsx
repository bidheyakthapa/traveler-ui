import { BiSolidPlaneAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center mt-4">
      <div className="flex items-center text-blue-500 font-semibold text-lg">
        <BiSolidPlaneAlt />
        <h1>myDreamPlace</h1>
      </div>
      <div className="flex gap-8">
        <Link to="/" className="hover:text-blue-700">
          Home
        </Link>
        <Link to="/discover" className="hover:text-blue-700">
          Discover
        </Link>
        <a href="#" className="hover:text-blue-700">
          Activities
        </a>
        <a href="#" className="hover:text-blue-700">
          About
        </a>
        <a href="#" className="hover:text-blue-700">
          Contact
        </a>
      </div>
      <div className="flex gap-2">
        <button className="text-blue-500 border border-blue-500 border-2 font-semibold px-4 py-2 rounded cursor-pointer">
          Register
        </button>
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded cursor-pointer">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Nav;
