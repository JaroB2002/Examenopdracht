import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';


const stofzuigers = ({naviation}) =>{

    const [stofzuigers, setStofzuigers] = useState ([]);

    const getStofzuigers = async () => {
        try {
            const response = await fetch ("http://jarobrichau.be/wp-json/wp/v2/posts?categories=6", {

            })
            const json = await response.json();
            setStofzuigers(json);
            console.log(stofzuigers);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getStofzuigers();
    }, []);


    return (
        <View>
            <FlatList data={stofzuigers} renderItem={({item}) => (

                <View>
                <Text>{item.title.rendered}</Text>

            <Pressable>
                <Text>bekijk product:</Text>
            </Pressable>

            </View>
            )}/>
        </View>
    )
}

export default stofzuigers;