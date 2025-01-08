import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import useBookingStore from '../../stores/bookingsStore';
import PropertyCard from '../../components/PropertyCard';

export default function BookingsScreen() {
    const bookings = useBookingStore((state: any) => state.bookings);

    return (
        <View style={tw`flex-1 bg-white p-4`}>
            <Text style={tw`text-blue-600 text-2xl font-bold mb-4`}>Bookings</Text>
            {bookings.length === 0 ? (
                <Text style={tw`text-gray-600`}>No bookings yet.</Text>
            ) : (
                <FlatList
                    data={bookings}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <PropertyCard property={item} />}
                />
            )}
        </View>
    );
}
