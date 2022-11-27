import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
const Header = ({title}) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      //   colors={["09c6f9" , "045de9"]}
      colors={[ "#045de9","#09c6f9"]}
      style={{
        height: 120,
      }}
    >
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between" ,
        width:"85%",
        alignSelf:"center",
        marginTop:10
      }}>
        
        <Text style={{
            padding:10,
            fontSize:20,
            fontWeight:"bold",
            color:"white",
            letterSpacing:2
        }}>{title}</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/notif.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 60,
              tintColor:"white"
            }}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default Header

const styles = StyleSheet.create({})