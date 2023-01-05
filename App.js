/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';


export default function App() {
  const [plants, setPlants] = useState ([]);

    const getPlants = async () => {
        try {
            const response = await fetch ("http://jarobrichau.be/wp-json/wp/v2/posts?categories=6", {

            })
            const json = await response.json();
            console.log(json)
            setPlants(json);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPlants();
    }, []);
  return (
    <View>
    <FlatList data={plants} renderItem={({item})=>(
        <Text>
            <Text>{item.title.rendered}</Text>
            <Pressable>Verder</Pressable>
        </Text>
      )}

 />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import meubels from './screens/AllStofzuigerSreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trendy meubels" component={(meubels)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
