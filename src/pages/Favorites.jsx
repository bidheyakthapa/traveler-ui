import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import useFavoritesStore from "../favStore";
import { useNavigate } from "react-router-dom";
import usePropertyDetails from "../store";
import Note from "../components/Note";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const setPropertyDetails = usePropertyDetails(
    (state) => state.setPropertyDetails
  );
  const navigate = useNavigate();

  const onBtnClick = (data) => {
    setPropertyDetails(data);
    navigate(`/property/${data.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <ItemCard key={fav.id} data={fav} onBtnClick={onBtnClick} />
          ))
        ) : (
          <p className="flex-grow flex items-center justify-center mt-8 font-bold text-lg">
            No favorites yet
          </p>
        )}
      </div>
      <Note />
      <Footer />
    </div>
  );
};

export default Favorites;
