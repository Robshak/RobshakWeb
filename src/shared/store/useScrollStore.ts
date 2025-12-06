import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ScrollState {
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

export const useScrollStore = create<ScrollState>()(
  persist(
    (set) => ({
      scrollPosition: 0,
      setScrollPosition: (position) => set({ scrollPosition: position }),
    }),
    {
      name: 'scroll-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
