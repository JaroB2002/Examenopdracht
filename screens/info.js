/*import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
*/
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView} from 'react-native';

const meubels = ({navigation}) =>{

    return (
        <View>
           <Text>
<p>Dit is wat tekst</p>
           </Text>
        </View>
    )
}



const Stack = createNativeStackNavigator();

const info = ({route, navigation}) =>{

    return (
        <View>
          <Text>
            {route.params.title} 


          </Text>

          <Image style={styles.image} source={{uri:route.params.image}} />

          {/* <ScrollView>
              <Image
                style={styles.filmPoster}
                source={{
                  uri: info.banner,
                }}
              />
              <Text style={styles.title}>{info.title}</Text>
              <View style={styles.details}>
                  <Text>{info.plot}</Text>
                  <Text style={styles.release}>release: {info.release}</Text>
              </View>

              </ScrollView> */}
        </View>
    );


}


/* Gedeelte vd film genomen*/
const styles = StyleSheet.create({
  image:{
    width: 180,
    height: 180,
},
    title: {
      margin: 16,
      fontSize: 24,
      textAlign: 'center',
    },
    details: {
      borderWidth: 1,
      padding: 16,
      margin: 8,
    },
    filmPoster: {
      width: '100%',
      height: 450
    },
    release: {
      fontStyle: 'italic',
      fontSize: 12,
      marginTop: 8,
      textAlign: 'right',
    },

  });

export default info;
