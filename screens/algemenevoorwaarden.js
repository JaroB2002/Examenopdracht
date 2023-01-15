import {StyleSheet, Text, View, Button, ScrollView, TouchableOpacity} from 'react-native';
const AlgemeneVoorwaarden = ({navigation}) =>{

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>
                Terms and Conditions for [D3JB] 
                               </Text>
                <View style={styles.ExtraText}> 
                      <Text style={styles.subTitle}>Introduction</Text>
                      <Text>
                      This document outlines the terms and conditions (the "Terms") under which you, the user, may use the [D3JB] application (the "App") and any associated services, content, or features (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Services.
                      Use of the Services
                      You may use the Services only if you are 18 years of age or older and have the legal capacity to enter into a binding contract. By using the Services, you represent and warrant that you meet these requirements.
                      </Text>
                </View>
                <View style={styles.ExtraText}>
                      <Text style={styles.subTitle}>Disclaimer of Warranties</Text>
                      <Text> 
                      THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. [D3JB] MAKES NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, OR THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
                      </Text>
                </View>
                <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => alert("U antwoord is genoteerd.")} style={styles.btnKnop}>
                    <View>
                          <Text style={styles.textBtn}>AKKOORD</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => alert("Indien niet akkoord kan je deze app niet gebruiken.")} style={styles.btnKnop}>
                    <View>
                          <Text style={styles.textBtn}>NIET akkoord</Text>
                    </View>
                </TouchableOpacity>
                </View>
           </View>
        
        </ScrollView>
    )
}

export default AlgemeneVoorwaarden;

const styles = StyleSheet.create({

    title:{
        fontWeight:'900', 
    },

    btnKnop:{
        borderRadius: 15,
        padding:10,
        width:100,
        backgroundColor: "yellow",

    },
    textBtn:{
        color: "black",
        fontWeight: "600",
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
    },
    subTitle:{
        fontWeight:'88', 
        fontSize:16,
    },
    ExtraText:{
      backgroundColor:"#90EE90",
        marginVertical:10,
        padding:15,
        borderRadius:10
    },
    
      screen:{
          margin: 17,
        marginBottom:100,
      },
    
      container:{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
      },
      
      p:{
          color:"black",
      },
      
    
})
