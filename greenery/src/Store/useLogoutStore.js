import { create } from 'zustand'

export const useLogoutStore = create((set) => ({
  isLogout: false,
  setLogout: () => set((state) => ({ isLogout: true })),
}))

export default useLogoutStore;