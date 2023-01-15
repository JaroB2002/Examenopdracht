import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';

import Stofzuigers from './screens/stofzuigers.js';
import Info from './screens/info.js';
import Winkelcartscreen from './screens/winkelcart.js';
import AlgemeneVoorwaarden from './screens/algemenevoorwaarden.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Stofzuigers" component={(Stofzuigers)} />
        <Stack.Screen name="Info" component={(Info)} />
        <Stack.Screen name="Winkelmand" component={(Winkelcartscreen)} />
        <Stack.Screen name="Algemene Voorwaarden" component={(AlgemeneVoorwaarden)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
