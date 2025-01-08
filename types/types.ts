export interface Root {
    properties: Property[]
    bookings: Booking[]
    profile: Profile
}

export interface Property {
    id: string
    title: string
    price: number
    location: Location
    features: string[]
    images: string[]
}

export interface Location {
    address: string
    city: string
    state: string
    coordinates: Coordinates
}

export interface Coordinates {
    latitude: number
    longitude: number
}

export interface Booking {
    id: string
    propertyId: string
    userId: string
    checkIn: string
    checkOut: string
    status: string
}

export interface Profile {
    id: string
    name: string
    email: string
    bookings: string[]
}
