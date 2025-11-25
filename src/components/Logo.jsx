import { BiSolidPlaneAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-blue-500 font-semibold text-lg mt-4"
      aria-label="Go to homepage"
    >
      <BiSolidPlaneAlt />
      <span className="ml-2">myDreamPlace</span>
    </Link>
  );
};

export default Logo;
