import { create } from 'zustand'

export const useCardShowStore = create((set) => ({
  isOpen: false,
  setOpen: (state) => set(({ isOpen: state})),
}))

export default useCardShowStore;