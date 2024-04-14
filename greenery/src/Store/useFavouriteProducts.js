import { create } from "zustand";

export const useFavouriteProducts = create((set) => ({
  favouriteProduct: null,
  setFavouriteProduct: (newFavouriteProduct) => set({ favouriteProduct: newFavouriteProduct }),
}));

export default useFavouriteProducts;