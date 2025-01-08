import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { usePropertyStore } from '../stores/propertiesStore'

const AutoScrollImages = ({ images }: any) => {
    const flatListRef = useRef(null);
    const currentIndex = useRef(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (flatListRef.current) {
    //             currentIndex.current =
    //                 currentIndex.current === images.length - 1 ? 0 : currentIndex.current + 1;

    //             flatListRef.current?.scrollToIndex({
    //                 animated: true,
    //                 index: currentIndex.current,
    //             });
    //         }
    //     }, 2000); // Auto-scroll every 3 seconds

    //     return () => clearInterval(interval); // Cleanup interval on unmount
    // }, [images]);

    return (
        <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item }}
                    style={tw`w-[500px] h-[200px] rounded-lg mr-2`} // Adjust width/height as needed
                />
            )}
        />
    );
};

export default function PropertyCard({ property }: any) {
    const setSelectedProperty = usePropertyStore((state: any) => state.setSelectedProperty);
    const router = useRouter();
    return (
        // <TouchableOpacity
        //     style={tw`border border-blue-600 p-4 mb-4 rounded-xl`}
        //     onPress={() => {
        //         router.push({ pathname: '/property-detail' });
        //         setSelectedProperty(property)
        //     }}
        // >
        //     <Text style={tw`text-blue-600 font-bold`}>{property.title}</Text>
        //     <Text>Address: {property.location.address}</Text>
        //     <Text>City: {property.location.city}</Text>
        //     <Text>State: {property.location.state}</Text>
        // </TouchableOpacity>

        <ScrollView>
            <TouchableOpacity
                onPress={() => {
                    router.push({ pathname: '/property-detail' });
                    setSelectedProperty(property)
                }}
                style={tw`h-auto`}
            >
                <View style={tw`bg-white p-4 rounded-xl mb-4 shadow-md flex-col items-center justify-center h-[full]`}>
                    <AutoScrollImages images={property.images} />
                    <View style={tw`ml-4 flex-1 h-1/3`}>
                        <Text style={tw`text-lg font-bold text-blue-800`}>{property.title}</Text>
                        <Text style={tw`text-sm text-gray-500`}>
                            {property.location.city}, {property.location.state}
                        </Text>
                        <View style={tw`mt-2 flex-row items-center`}>
                            <View style={tw`flex-row items-center mr-4`}>
                                <Image
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/892/892462.png' }} // Bed icon URL
                                    style={tw`w-4 h-4 mr-1`}
                                />
                                <Text style={tw`text-sm text-gray-700`}>{property.features[0]}</Text>
                            </View>
                            <View style={tw`flex-row items-center`}>
                                <Image
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }} // Bathroom icon URL
                                    style={tw`w-4 h-4 mr-1`}
                                />
                                <Text style={tw`text-sm text-gray-700`}>{property.features[1]}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

