import { create } from "zustand";

export const useTreeSeasons = create((set) => ({
  isTreeSeasons: "spring",
  setTreeSeasons: (state) => set(({ isTreeSeasons: state})),
}));

export default useTreeSeasons;
