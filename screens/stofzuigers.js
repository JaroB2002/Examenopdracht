
import React, {useState, useEffect} from 'react';
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
            if (enteredText.length > 3) {
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
                                    style={{ width:250, height:350}}
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
                                });
                            }}>
                            <Text style={Styles.ExtraInfo}>Extra info</Text>
                        </Pressable>
                    </View>
                    
                    <View style={{
                        borderBottomColor: '#f2f2f2',
                        borderBottomWidth: 2,
                    }}
                    />   
                </View>
            )}/>
            <Pressable 
                style={Styles.br} 
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
        paddingTop: 20,
        fontSize:25,
        fontWeight:'700'
    },
    
    br:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:3,
    },
    ExtraInfo:{
        backgroundColor:"black", 
        paddingHorizontal:25,
        paddingVertical:8,
        textAlign: 'center',
        fontWeight:'700',
        color: "white",
        borderRadius: 20
    },
    add:{
        backgroundColor:"#90EE90",
        width: 200, 
        paddingHorizontal:5,
        paddingVertical:8,
        textAlign: 'center',
        fontWeight:'700',
        color: "white",
        borderRadius: 20
    },

    input:{
        backgroundColor:"#CCCCFF", //perwinkle zoek*/
        padding: 10,
        margin: 30,
        borderRadius: 10,
        color:"white",
        
    },

    p:{
        color:"black",
    },
    screen: {
        fontFamily: "Acme-Regular"
      },
      screen: {
        fontFamily: "Acme-Regular"
      }
    

})
    

export default Stofzuigers;
