import React from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import useBookingStore from '../stores/bookingsStore';
import { Property } from '@/types/types';
import { usePropertyStore } from '@/stores/propertiesStore';
import { useRouter } from 'expo-router';

export default function PropertyDetailScreen({ route }: any) {
    const property: Property = usePropertyStore((state: any) => state.selectedProperty);
    const addBooking = useBookingStore((state: any) => state.addBooking);
    const router = useRouter();

    return (
        <View style={tw`flex-1 bg-white`}>
            <Text style={tw`text-blue-600 text-xl font-bold p-4`}>{property.title}</Text>
            <MapView
                style={tw`flex-1`}
                initialRegion={{
                    latitude: property.location.coordinates.latitude,
                    longitude: property.location.coordinates.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={{ latitude: property.location.coordinates.latitude, longitude: property.location.coordinates.longitude }} />
            </MapView>
            <View style={tw`p-4`}>
                <Text style={tw`text-blue-600 font-semibold mb-2`}>Features:</Text>
                {property.features.map((feature: string, idx: number) => (
                    <Text key={idx} style={tw`text-gray-600`}>• {feature}</Text>
                ))}
                <Button title="Book Property" color="#1D4ED8" onPress={() => {
                    addBooking(property);
                    router.push({ pathname: '/(tabs)/bookings' });
                }} />
            </View>
        </View>
    );
}
