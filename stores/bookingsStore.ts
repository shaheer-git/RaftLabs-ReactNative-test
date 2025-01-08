import { create } from 'zustand';

const useBookingStore = create((set: any) => ({
    bookings: [],
    addBooking: (property: any) => set((state: any) => ({ bookings: [...state.bookings, property] })),
    selectedProperty: null,
    setSelectedProperty: (property: any) => set({ selectedProperty: property }),
}));

export default useBookingStore;
