import { create } from 'zustand';

export const usePropertyStore = create((set) => ({
    selectedProperty: null,
    setSelectedProperty: (property: any) => set({ selectedProperty: property }),
}));