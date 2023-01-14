import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableNativeFeedback, ToastAndroid  } from 'react-native';

//import { WebViewLeaf } from 'react-native-webview-leaf';

import Stofzuigers from './screens/stofzuigers.js';
import Info from './screens/info.js';
import Winkelcartscreen from './screens/winkelcart.js';
import AlgemeneVoorwaarden from './screens/algemenevoorwaarden.js';

const Stack = createNativeStackNavigator();
// function showToast() {
//   ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
// }
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

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#6638f0',
    padding: 8,
  },*/

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "SFUIDisplay-Bold"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontFamily: "SFUIDisplay-Semibold"
  }
});
