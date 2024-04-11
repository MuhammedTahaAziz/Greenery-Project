import { create } from "zustand";

export const useDiscount = create((set) => ({
    isDiscount: false,
    setDiscount: (state) => set(({ isDiscount: state})),
}));

export default useDiscount;
