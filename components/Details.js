import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';


function Details(props){
    return (
        <>
           <View style={styles.background}>
                <Text style={styles.title}>
                    {props.itemTitle} 
                </Text>
                <Text style={styles.itemDescription}>
                    {props.itemDescription}
                </Text>


                <FlatList style={{height:610}} renderItem={({item}) => (
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
        </>
    )
}

const styles = StyleSheet.create({
   
    background:{
        backgroundColor:"#555555",
        paddingBottom: 300,
    },
    title:{
        color:"#98DD98",
        textAlign: 'center',
        fontSize: 30, 
        margin:20,
    },
    itemDescription:{
        color:"#fff",
        fontSize: 20,
        textAlign: 'left',
        margin:18
    },


    
});

export default Details;
