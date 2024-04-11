import { create } from 'zustand'

export const useSettingStore = create((set) => ({
  isSettingOpen: false,
  setSettingOpen: () => set((state) => ({ isSettingOpen: !state.isSettingOpen })),
}))

export default useSettingStore;