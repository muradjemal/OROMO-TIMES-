import { create } from 'zustand';
import { SearchStore } from '../types';

export const useSearchStore = create<SearchStore>((set) => ({
  isOpen: false,
  query: '',
  toggleSearch: () => set((state) => ({ isOpen: !state.isOpen })),
  setQuery: (query) => set({ query }),
}));
