import { create } from 'zustand';

export interface DrawerStore {
    isOpen: boolean;

    toggle: () => void;
    close: () => void;
    open: () => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
    isOpen: false,

    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set({ isOpen: false }),
    open: () => set({ isOpen: true }),
}));