import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className="mt-16 bg-orange-200 py-5 px-4 rounded-lg flex items-center gap-4 text-4xl">
      <CiWarning />
      <p className="text-lg">
        Check the latest COVID-19 restrictions before you travel.{" "}
        <Link to="/" className="text-blue-500">
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default Note;
