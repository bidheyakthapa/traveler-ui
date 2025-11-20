import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Note from "../components/Note";
import { CiLocationOn } from "react-icons/ci";
import usePropertyDetails from "../store";
import useFavoritesStore from "../favStore";
import Toast from "../components/Toast";

const PropertyDetail = () => {
  const property = usePropertyDetails((store) => store.propertyDetails);
  const { setFavorites, removeFavorites, isFavorited } = useFavoritesStore();

  const [toast, setToast] = useState({ show: false, message: "", status: "" });

  const isPropertyFavorited = property ? isFavorited(property.id) : false;

  const { name, rating, reviewCount, location, overview } = property || {};

  const handleFavoriteToggle = () => {
    if (property) {
      if (isPropertyFavorited) {
        removeFavorites(property.id);
        setToast({
          show: true,
          message: "Removed from favorites",
          status: "success",
        });
      } else {
        setFavorites(property);
        setToast({
          show: true,
          message: "Added to favorites",
          status: "success",
        });
      }
    }
  };

  const handleToastClose = () => {
    setToast({ show: false, message: "", status: "" });
  };

  return (
    <div>
      <Nav />
      <div className="-mx-16 bg-gradient-to-b from-gray-100 to-white shadow-md">
        <div className="mx-16">
          <div className="grid grid-cols-[2fr_1fr] grid-rows-2 gap-4 py-8 max-h-[75vh]">
            <img
              src="/images/japan.jpg"
              alt="Japan"
              className="w-full h-full object-cover rounded-lg row-span-2"
            />
            <div className="flex flex-col gap-4">
              <img
                src="/images/aus.jpg"
                alt="Aus"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/images/hero.jpg"
                alt="Hero"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-8 text-sm text-gray-800">
              <p className="border-b-3 border-blue-500 p-2 pt-0">Overview</p>
              <p>Rooms</p>
              <p>Guest Reviews</p>
            </div>
            <button
              onClick={handleFavoriteToggle}
              className="cursor-pointer px-2 py-1 bg-blue-500 text-white font-semibold rounded mb-2"
            >
              {isPropertyFavorited
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
          </div>
        </div>
      </div>
      <div className="-mx-16 bg-gray-100">
        <div className="mx-16 py-8 grid grid-cols-[2fr_1fr] gap-6">
          <div>
            <h1 className="text-2xl font-semibold ">{name}</h1>
            <p className="flex text-yellow-500 gap-1 items-center my-2">
              <FaStar />
              <span className="text-gray-700">
                {rating} ({reviewCount} Reviews)
              </span>
            </p>
            <p className="flex text-blue-500 gap-1 items-center text-xl">
              <CiLocationOn />
              <span className="text-gray-700 text-sm">{location}</span>
            </p>

            <div className="bg-white rounded p-8 mt-4">
              <h4 className="text-lg font-semibold">Overview</h4>
              <p className="text-gray-600">{overview}</p>
            </div>
          </div>
          <div>
            <img src="/images/aus.jpg" alt="Map" className="rounded-lg " />
            <div>
              <h4 className="font-semibold my-2">Explore the area</h4>
              <div className="flex items-center text-gray-600 mt-2 gap-1">
                <CiLocationOn />
                <p className="flex justify-between w-full">
                  Location A <span>2 min drive</span>
                </p>
              </div>
              <div className="flex items-center text-gray-600 mt-2 gap-1">
                <CiLocationOn />
                <p className="flex justify-between w-full">
                  Location B <span>2 min drive</span>
                </p>
              </div>
              <div className="flex items-center text-gray-600 mt-2 gap-1">
                <CiLocationOn />
                <p className="flex justify-between w-full">
                  Location C <span>2 min drive</span>
                </p>
              </div>
              <div className="flex items-center text-gray-600 mt-2 gap-1">
                <CiLocationOn />
                <p className="flex justify-between w-full">
                  Location D <span>2 min drive</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast
        message={toast.message}
        status={toast.status}
        isVisible={toast.show}
        onClose={handleToastClose}
      />
      <Note />
      <Footer />
    </div>
  );
};

export default PropertyDetail;
