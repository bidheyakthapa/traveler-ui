import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className="mt-8 bg-orange-200 py-4 px-3 rounded-lg flex items-start gap-2 sm:gap-3">
      <CiWarning className="mt-0.5 text-xl sm:text-2xl" />
      <p className="text-sm sm:text-base md:text-lg">
        Check the latest COVID-19 restrictions before you travel.{" "}
        <Link to="/" className="text-blue-500">
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default Note;
