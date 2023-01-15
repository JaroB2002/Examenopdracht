import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, Vibration} from 'react-native';

const Winkelcartscreen = ({navigation, route}) =>{
    const { cart } = route.params;
    console.log(cart)
    return (
        <View style={Styles.screen}>
            <FlatList style={{height:610}} data={cart} renderItem={({item}) => (
                <View>
                    <Text>{item.title.rendered}</Text>
                    <View>
                            {item.yoast_head_json?.og_image !== undefined && 
                                <Image
                                    style={{ width:200, height:300}}
                                    resizeMode="contain"
                                    source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                                />
                            }
                        </View>
                        <View style={{
                            borderBottomColor: '#f2f2f2',
                            borderBottomWidth: 2,
                        }}/> 
                </View>
                
            )}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    
    screen:{
        backgroundColor:"#FFFFFF",
        padding:30,
    },
})
    

export default Winkelcartscreen;
