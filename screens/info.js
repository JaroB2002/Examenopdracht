import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, Vibration} from 'react-native';

import Details from '../components/Details';

const Info = ({navigation, route}) =>{

    return (
        <View>
          <Details 
            itemTitle={route.params.itemTitle}  
            itemDescription={route.params.itemDescription} 
            itemImage={route.params.itemImage}
          />
          <Image style={styles.image} source={{uri:route.params.image}} />
        </View>
    )
}
const styles = StyleSheet.create({
    Info:{
      justifyContent: 'center',
      alignItems: 'center',
      padding: 300,
  },


  });

export default Info;
