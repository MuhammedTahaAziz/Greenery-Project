import { create } from "zustand";

export const useSeasonCategory = create((set) => ({
  isSeasonCategory: "all",
  setSeasonCategory: (state) => set({ isSeasonCategory: state }),
}));

export default useSeasonCategory;
