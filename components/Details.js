import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';


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
            </View>
        </>
    )
}

const styles = StyleSheet.create({
   
    background:{
        backgroundColor:"#555354",
        paddingBottom: 30000,
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
    Details: {
        fontFamily: "Acme-Regular"
      },
      Details: {
        fontFamily: "Acme-Regular"
      }
     /* itemDescription: {
        fontFamily: "Acme-Regular"
      },
      itemDescription: {
        fontFamily: "Acme-Regular"
      }*/
    
});

export default Details;
