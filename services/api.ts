import { Booking, Profile, Property } from '../types/types';
export const getProperties = async () => {
    let properties: Property[]; 
    try {
       let response =  await fetch("http://localhost:3000/properties");
       properties =  await response.json() as Property[];
    } catch (error) {
        console.log(error);
        properties = [];
    }
    return properties;
}

export const getBookings = async () => {
    let bookings: Booking[]; 
    try {
       let response =  await fetch("http://localhost:3000/bookings");
       bookings =  await response.json() as Booking[];
    } catch (error) {
        console.log(error);
        bookings = [];
    }
    return bookings;
}

export const getProfile = async () => { 
    let profile: Profile;
    try {
       let response =  await fetch("http://localhost:3000/profile");
       profile =  await response.json();
       return profile;
    } catch (error) {
        console.log(error);
    }
    
};