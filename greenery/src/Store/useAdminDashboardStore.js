import { create } from "zustand";

export const useAdminDashboard = create((set) => ({
    isAdminDashboard: false,
    setAdminDashboard: (state) => set(({ isAdminDashboard: state})),
}));

export default useAdminDashboard;
