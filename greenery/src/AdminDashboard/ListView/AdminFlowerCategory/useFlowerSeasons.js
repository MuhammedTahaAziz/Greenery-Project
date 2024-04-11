import { create } from "zustand";

export const useFlowerSeasons = create((set) => ({
  isFlowerSeasons: "spring",
  setFlowerSeasons: (state) => set(({ isFlowerSeasons: state})),
}));

export default useFlowerSeasons;
