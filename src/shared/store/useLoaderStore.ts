import { create } from 'zustand';

interface LoaderState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
