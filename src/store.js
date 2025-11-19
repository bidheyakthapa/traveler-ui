import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import Cookies from "js-cookie";

const usePropertyDetails = create(
  persist(
    (set) => ({
      propertyDetails: null,
      setPropertyDetails: (property) => set({ propertyDetails: property }),
    }),
    {
      name: "propertyDetails",
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const cookie = Cookies.get(name);
          return cookie ? JSON.parse(cookie) : null;
        },
        setItem: (name, value) => Cookies.set(name, JSON.stringify(value)),
        removeItem: (name) => Cookies.remove(name),
      })),
    }
  )
);

export default usePropertyDetails;
