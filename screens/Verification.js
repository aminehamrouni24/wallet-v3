import { StyleSheet, Text, View, Button, TouchableOpacity , Image, Alert } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Verification = () => {
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    alert(result.uri);

    console.log(result);
  };
  const navigation=useNavigation()
  const press=()=>{
    Alert.alert('Document Uploaded successfully')
    navigation.navigate('Home')
  }
    let customFonts = {
      Cairo: require("../constants/fonts/Cairo-VariableFont_wght.ttf"),
      Philosopher: require("../constants/fonts/Philosopher-Regular.ttf"),
    };

    const [isLoaded] = useFonts(customFonts);
    if (!isLoaded) return null;
  return (
    <SafeAreaView
      style={{
        width: "90%",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            letterSpacing: 2,
            fontWeight: "bold",
            color: "rgba(0,0,255,0.75)",
          }}
        >
          Identity
        </Text>
        <Text
          style={{
            fontSize: 34,
            letterSpacing: 2,
            fontWeight: "bold",
            color: "rgba(0,0,255,0.75)",
          }}
        >
          Verification
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 1,
            textAlign: "justify",
            lineHeight: 20,
            fontFamily:"Philosopher"
          }}
        >
          Please verify your identity by uploading your passport or your driver
          licence .
        </Text>
      </View>
      {/* <Button title="Select Document" onPress={_pickDocument} /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          onPress={_pickDocument}
          style={{
            backgroundColor: "rgba(0,0,255,0.15)",
            width: 150,
            height: 210,
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Image
            source={require("../assets/upload.png")}
            style={{
              width: 130,
              height: 130,
              tintColor: "rgba(0,0,255,0.65)",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Your Passport
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_pickDocument}
          style={{
            backgroundColor: "rgba(0,0,255,0.15)",
            width: 150,
            height: 210,
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Image
            source={require("../assets/upload.png")}
            style={{
              width: 130,
              height: 130,
              tintColor: "rgba(0,0,255,0.65)",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Your Driver Licence
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(0,0,255,0.65)",
          width:250,
          height:50,
          alignSelf:"center",
          borderRadius:20,
          marginTop:120
        }}
        onPress={press}
      >
        <Text style={{
            textAlign:"center",
            padding:10,
            fontSize:18,
            color:"white",
            fontWeight:"bold"
        }}>VERIFY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({});
