import { CiLocationOn } from "react-icons/ci";
import { LuSquareUserRound } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="relative bg-[url('/images/hero.jpg')] bg-cover bg-center rounded-xl">
      <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

      <div className="relative z-10 pt-12 pb-20 px-4 text-center text-white md:min-h-[85vh] md:flex md:flex-col md:justify-center md:items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Enjoy your dream vacation
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light">
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>

      <div className="z-10 relative px-4 -mt-6 md:mt-0 md:absolute md:bottom-[-28px] md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-full">
        <div className="bg-white rounded-lg p-3 shadow-lg flex flex-col md:flex-row gap-2 md:gap-3 items-stretch max-w-4xl mx-auto">
          <div className="flex-1 bg-gray-200 rounded flex items-center gap-2 px-3 py-2 sm:min-w-[50px]">
            <CiLocationOn className="text-gray-600 flex-shrink-0" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="bg-transparent w-full focus:outline-none text-sm md:text-base placeholder-gray-500"
            />
          </div>

          <div className="bg-gray-200 rounded flex items-center px-3 py-2">
            <input
              type="date"
              className="bg-transparent focus:outline-none text-sm md:text-base"
            />
          </div>

          <div className="bg-gray-200 rounded flex items-center px-3 py-2">
            <input
              type="date"
              className="bg-transparent focus:outline-none text-sm md:text-base"
            />
          </div>

          {/* Guests */}
          <div className="bg-gray-200 rounded flex items-center gap-2 px-3 py-2">
            <LuSquareUserRound className="text-gray-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Guests"
              className="bg-transparent w-full focus:outline-none text-sm md:text-base placeholder-gray-500"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 md:px-6 rounded whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
