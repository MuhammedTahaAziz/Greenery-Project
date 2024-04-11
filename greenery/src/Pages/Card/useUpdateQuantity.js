import { create } from "zustand";

export const useUpdateQuantity = create((set) => ({
  updateQuantity: {},
  setUpdateQuantity: (state) => set(({ updateQuantity: state})),
}));

export default useUpdateQuantity;
