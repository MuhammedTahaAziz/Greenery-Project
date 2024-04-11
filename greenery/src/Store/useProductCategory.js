import { create } from "zustand";

export const useProductCategory = create((set) => ({
  isProductCategory: "flower",
  setProductCategory: (state) => set(({ isProductCategory: state})),
}));

export default useProductCategory;
