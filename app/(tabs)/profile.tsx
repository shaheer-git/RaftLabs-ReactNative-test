import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { getProfile } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export default function profile() {

  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile()
  });
  if (isLoading) {
    return <Text style={tw`text-blue-600 text-center mt-10`}>Loading...</Text>;
  }


  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-blue-600 text-2xl font-bold mb-4`}>
        My Profile
      </Text>
      <View style={tw`flex-1 bg-white items-center justify-center`}>
        <Text style={tw`text-gray-800 text-xl`}>
          {data?.name}
        </Text>
        <Text style={tw`text-gray-800 text-xl`}>
          {data?.email}
        </Text>
        <Text style={tw`text-gray-800 text-xl`}>
          {data?.bookings}
        </Text>
      </View>
    </View>
  )
}