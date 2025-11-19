import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import Cookies from "js-cookie";

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      setFavorites: (property) =>
        set((state) => {
          const isAlreadyFavorite = state.favorites.some(
            (fav) => fav.id === property.id
          );

          if (!isAlreadyFavorite) {
            return { favorites: [...state.favorites, property] };
          }
          return undefined;
        }),

      removeFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== id),
        })),

      isFavorited: (propertyId) => {
        const state = get();
        return state.favorites.some((fav) => fav.id === propertyId);
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const cookie = Cookies.get(name);
          return cookie ? JSON.parse(cookie) : { favorites: [] };
        },
        setItem: (name, value) => Cookies.set(name, JSON.stringify(value)),
        removeItem: (name) => Cookies.remove(name),
      })),
    }
  )
);

export default useFavoritesStore;
