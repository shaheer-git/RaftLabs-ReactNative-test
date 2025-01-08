import { FlatList, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import tw from 'twrnc';
import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { getProperties } from '@/services/api';

export default function TabOneScreen() {

  const { data, isLoading } = useQuery({
    queryKey: ['properties'],
    queryFn: () => getProperties()
  });

  const [search, setSearch] = useState('');
  console.log(data)

  if (isLoading) {
    return <Text style={tw`text-blue-600 text-center mt-10`}>Loading...</Text>;
  }

  const filteredProperties = data?.filter((property: any) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-blue-600 text-2xl font-bold mb-4`}>Properties</Text>
      <TextInput
        style={tw`border p-2 mb-4 rounded border-blue-600`}
        placeholder="Search properties..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PropertyCard property={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
