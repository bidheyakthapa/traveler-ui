import { BiSolidPlaneAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* TOP NAV */}
      <nav className="flex justify-between items-center md:px-0 px-0 py-4">
        <Link
          to="/"
          className="flex items-center text-blue-500 font-semibold text-lg cursor-pointer"
        >
          <BiSolidPlaneAlt className="mr-1" />
          <h1>myDreamPlace</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/favorites">Favorites</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex gap-2">
          <button
            className="text-blue-500 border-2 border-blue-500 px-4 py-2 rounded"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-500"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
          <Link
            to="/"
            className="flex items-center text-blue-500 font-semibold text-lg cursor-pointer"
          >
            <BiSolidPlaneAlt className="mr-1" />
            <h1 className="cursor-pointer">myDreamPlace</h1>
          </Link>
          <button
            className="text-gray-500 text-3xl leading-none"
            onClick={closeMenu}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 gap-5">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/discover" onClick={closeMenu}>
            Discover
          </Link>
          <Link to="/favorites" onClick={closeMenu}>
            Favorites
          </Link>
          <a href="#" onClick={closeMenu}>
            About
          </a>
          <a href="#" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-col px-6 mt-4 gap-3 border-t border-gray-300 pt-4">
          <button
            onClick={() => {
              closeMenu();
              navigate("/signup");
            }}
            className="text-blue-500 border-2 border-blue-500 px-4 py-3 rounded"
          >
            Register
          </button>
          <button
            onClick={() => {
              closeMenu();
              navigate("/login");
            }}
            className="bg-blue-500 text-white px-4 py-3 rounded"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
