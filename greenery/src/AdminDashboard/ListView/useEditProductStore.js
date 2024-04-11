import { create } from "zustand";

export const useEditProductStore = create((set) => ({
    isIdProduct: "",
    setIdProduct: (state) => set(({ isIdProduct: state})),
}));

export default useEditProductStore;
