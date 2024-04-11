import { create } from 'zustand'

export const useSignupStore = create((set) => ({
  isSignedup: true,
  setSignedup: () => set((state) => ({ isSignedup: false })),
}))

export default useSignupStore;