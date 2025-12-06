import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AboutState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const useAboutStore = create<AboutState>()(
  persist(
    (set) => ({
      currentPage: 0,
      setCurrentPage: (page) => set({ currentPage: page }),
    }),
    {
      name: 'about-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
