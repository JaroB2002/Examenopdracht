

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
  /*image:{
    width: 180,
    height: 180,
},*//*
    title: {
      margin: 16,
      fontSize: '20px',
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
      fontSize: '20px',
      marginTop: 8,
      textAlign: 'right',
    },
    StyleSheet: {
      fontFamily: "Acme-Regular"
    },
    StyleSheet: {
      fontFamily: "Acme-Regular"
    }*/
    Info:{
      justifyContent: 'center',
      alignItems: 'center',
      padding: 300,
  },


  });

export default Info;
