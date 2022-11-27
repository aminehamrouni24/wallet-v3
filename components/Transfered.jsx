import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import TransactionHistory from "./TransactionHistory";

const Transfered = () => {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  const showHandle = () => {
    setShow(!show);
  };
  let customFonts = {
    Cairo: require("../constants/fonts/Cairo-VariableFont_wght.ttf"),
    Philosopher: require("../constants/fonts/Philosopher-Bold.ttf"),
    CairoBold: require("../constants/fonts/Cairo-Bold.ttf"),
  };

  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) return null;
  return (
    <View style={styles.mainContainer}>
      <View>
        <TouchableOpacity style={styles.details}>
          <Text style={styles.detailText}>More details</Text>
          <Image
            style={styles.image}
            source={require("../assets/plus2.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: 10,
        }}
      >
        <Text>Add Recipients</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{
              width: 90,
              height: 90,
              borderWidth: 2,
              borderStyle: "dotted",
              borderRadius: 20,
              borderColor: "rgba(0,0,255,0.6)",
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                margin: 15,
                tintColor: "rgba(0,0,255,0.6)",
              }}
              source={require("../assets/plus2.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 90,
              height: 90,
              borderWidth: 2,
              borderStyle: "dotted",
              borderRadius: 20,
              borderColor: "rgba(0,0,255,0.6)",
            }}
          >
            <Image
              style={{
                width: 50,
                height: 60,
                alignSelf: "center",
                margin: 15,
                tintColor: "rgba(0,0,255,0.6)",
              }}
              source={require("../assets/avatar.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 90,
              height: 90,
              borderWidth: 2,
              borderStyle: "dotted",
              borderRadius: 20,
              borderColor: "rgba(0,0,255,0.6)",
            }}
          >
            <Image
              style={{
                width: 50,
                height: 60,
                alignSelf: "center",
                margin: 15,
                tintColor: "rgba(0,0,255,0.6)",
              }}
              source={require("../assets/avatar.png")}
              resizeMode="contain"
            />

          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          margin: 10,
        }}
      >
        <Text>Latest transactions</Text></View>
      <TransactionHistory />
      <TransactionHistory />
      <TransactionHistory />
    </View>
  );
};

export default Transfered;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  details: {
    width: 150,
    height: 55,
    backgroundColor: "rgba(0,0,255,0.6)",
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginTop:-20
  },
  detailText: {
    fontFamily: "Cairo",
    textAlign: "center",
    fontSize: 14,
    color: "white",
    padding:5,

    fontWeight: "300",
  },
  image: {
    width: 30,
    height: 40,
    tintColor: "white",
  },
  transaction: {
    width: 330,
    height: 75,
    borderWidth: 2,
    borderStyle: "dotted",
    alignSelf: "center",
    margin: 20,
    borderRadius: 20,
    borderColor: "rgba(0,0,255,0.6)",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderStyle: "dotted",
    margin: 5,
    borderRadius: 100,
    borderColor: "rgba(0,0,255,0.6)",
  },
});
