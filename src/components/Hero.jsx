import { CiLocationOn } from "react-icons/ci";
import { LuSquareUserRound } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="relative bg-[url('/images/hero.jpg')] bg-cover rounded-xl">
      <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
      <div className="relative z-10 mt-4 flex flex-col text-center text-white justify-center items-center min-h-[85vh] rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Enjoy your dream vacation</h1>
        <p className="text-xl w-1/2 font-light">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
      <div className="absolute bottom-[-28px] left-[50%] transform -translate-x-1/2 z-10 min-w-2/3 bg-white rounded p-4 flex gap-2 items-center shadow-lg justify-center">
        <div className="bg-gray-200 rounded p-2 flex items-center gap-1">
          <CiLocationOn />
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="bg-gray-200 rounded p-2">
          <input type="date" placeholder="Check in date" />
        </div>
        <div className="bg-gray-200 rounded p-2">
          <input type="date" placeholder="Check out date" />
        </div>
        <div className="bg-gray-200 rounded p-2 flex items-center gap-1">
          <LuSquareUserRound className="text-gray-500" />
          <input type="text" placeholder="Guests" />
        </div>
        <button className="bg-blue-500 text-white font-semibold py-2 px-8 rounded cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
