import { create } from "zustand";

export const useCustomerDataStore = create((set) => ({
    isCustomerData: null,
    setCustomerData: (state) => set(({ isCustomerData: state})),
}));


export default useCustomerDataStore;
