
import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, Vibration} from 'react-native';

  
const Stofzuigers = ({navigation}) =>{

    const [stofzuigers, setStofzuigers] = useState ([]);
    const [cart, setCart] = useState([])

    const getStofzuigers = async () => {
        try {
            const response = await fetch ("https://jarobrichau.be/wp-json/wp/v2/posts?categories=6", {})
            const json = await response.json();
            setStofzuigers(json);
            console.log(stofzuigers);
        } catch (error) {
            console.error(error);
        }
    }
    const pattern= [
        // voor de vibratie bij winkelmand
        0,
        200,
        400,
        600,
    ];
    useEffect(() => {
        getStofzuigers();
    }, []);


 

    const getStofzuigerByTitleSearch = async (enteredText) => {//argument meegegeven door onChangeText
        try {
            if (enteredText.length > 5) { //tekst boven 5, wordt er gezocht
                const search = encodeURI("https://jarobrichau.be/wp-json/wp/v2/posts?slug=" + enteredText + "/");
                console.log(search);
                const response = await fetch(search);
                const json = await response.json();
                console.log(json);
                setStofzuigers(json);
            }
            else{
                getStofzuigers();
            }
        } 
        catch (error) {
            console.error(error);
        }
      }

    return (
       
        <View style={Styles.screen}>
           <View style={Styles.addWinkelmand}>
                <Pressable onPress ={() => {navigation.navigate ("Winkelmand", {cart: cart});Vibration.vibrate(pattern, false)}} style={Styles.mand}>
                        <Text>Winkelmand ({cart.length}) </Text>
                </Pressable>
            </View>

            <TextInput 
                placeholder= "Zoek naam stofzuiger" 
                style={Styles.input} 
                onChangeText={getStofzuigerByTitleSearch} 
                // geeft argument enteredText mee
            />

            <FlatList style={{height:510}} data={stofzuigers} renderItem={({item}) => (
                <View style={Styles.backgroundd}>
                    <View style={Styles.container}>
                        <View>
                            {item.yoast_head_json?.og_image !== undefined && 
                                <Image
                                    style={{ width:250, height:350}} //image opmaak (length & width)
                                    resizeMode="contain"
                                    source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                                />
                            }
                        </View>
                        <Text style={Styles.StofTitle}>{item.title.rendered}</Text>
                    </View>
                    
                    <View style={Styles.subContainer}>
                        <Pressable onPress={() => setCart([...cart, item])}> 
                            <Text style={Styles.add}> Toevoegen aan winkelmand</Text> 
                        </Pressable>
                        <Pressable 
                            style={Styles.br} 
                            onPress ={() => { 
                                navigation.navigate ("Info", {
                                    itemTitle: item.title.rendered, 
                                    itemDescription: item.yoast_head_json.description, 
                                    itemImage: item.yoast_head_json.og_image[0].url  
                                }); /*description erbij op info*/
                            }}>
                            <Text style={Styles.ExtraInfo}>Extra info</Text>  
                        </Pressable> 
                    </View>
                    
                    <View style={{
                        borderBottomColor: '#f2f2f2',
                        borderBottomWidth: 2, // lijntje ertussen
                    }}
                    />   
                </View>
            )}/>
            <Pressable 
                style={Styles.br} // navigeren naar algemene voorwaarden
                onPress ={() => { navigation.navigate ("Algemene Voorwaarden");}}>
                <Text style={Styles.ExtraInfo}>Algemene Voorwaarden</Text> 
            </Pressable> 
        </View>
    )
}

const Styles = StyleSheet.create({
    
    screen:{
        backgroundColor:"#FFFFFF",
    },

    addWinkelmand:{
        alignItems: 'center',
        paddingTop:12,
    },

    mand:{
        backgroundColor:"#90EE90", 
        paddingHorizontal:5,
        paddingVertical:8,
        textAlign: 'center',
        fontWeight:'700',
        color: "white",
        borderRadius: 20,
        width:210,
        margin:12,
        alignItems: 'center',

    },
    
    subContainer:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:18
    },

    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    StofTitle:{
        color:"#90EE90",
        paddingTop: 1,
        fontSize:25,
        fontWeight:'900',
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
        fontFamily: "Acme-Regular",
    },
    
    br:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:3,
    },
    ExtraInfo:{
        backgroundColor:"black", 
        paddingHorizontal:20,
        paddingVertical:6,
        textAlign: 'center',
        fontWeight:'700',
        color: "white",
        borderRadius: 20
    },
    add:{
        backgroundColor:"#90EE90",
        width: 200, 
        paddingHorizontal:5,
        paddingVertical:6,
        textAlign: 'center',
        fontWeight:'700',
        color: "white",
        borderRadius: 30
    },

    input:{
        backgroundColor:"#CCCCFF", //perwinkle zoek*/
        padding: 8,
        margin: 20,
        borderRadius: 10,
        color:"white",
        
    },

})
    
export default Stofzuigers;
