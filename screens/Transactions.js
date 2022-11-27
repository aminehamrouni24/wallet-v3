import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Transfered from "../components/Transfered";

const Transactions = () => {
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
    <SafeAreaView>
      <LinearGradient
        colors={["lightgrey", "#fff"]}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollView>
          <LinearGradient
            style={{
              width: "90%",
              height: 200,
              backgroundColor: "rgba(255,255,255,0.8)",
              alignSelf: "center",
              marginTop: 50,
              borderRadius: 30,
              shadowColor: "white",
              shadowOpacity: 0.8,
              borderColor: "rgb(255,255,255)",
              borderWidth: 1,
            }}
            colors={["lightgrey", "#fff"]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Cairo",
                  fontSize: 28,
                  color: "rgba(0,0,255,0.7)",
                  fontWeight: "300",
                  letterSpacing: 1,
                }}
              >
                Account Details
              </Text>
              <Image
                source={require("../assets/details.png")}
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 60,
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: "rgba(245,245,245,0.6)",
                alignSelf: "center",
                alignItems: "center",
                width: 320,
                height: 80,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 130,
                  height: 130,

                  alignSelf: "center",
                  alignItems: "center",
                  width: 150,
                  backgroundColor: "rgb(245,245,245)",
                  height: 50,
                  alignItems: "center",
                  alignSelf: "center",
                  borderRadius: 10,
                  borderWidth: 2,
                  borderStyle: "dotted",
                  borderColor: "rgba(0,0,255,0.6)",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 18,
                    color: "rgba(0,0,255,0.6)",
                    padding: 7,
                  }}
                >
                  Transfered
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 130,
                  height: 130,

                  alignSelf: "center",
                  alignItems: "center",
                  width: 150,
                  backgroundColor: "rgb(245,245,245)",
                  height: 50,
                  alignItems: "center",
                  alignSelf: "center",
                  borderRadius: 10,
                  borderWidth: 2,
                  borderStyle: "dotted",
                  borderColor: "rgba(0,0,255,0.6)",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 18,
                    padding: 7,
                    color: "rgba(0,0,255,0.6)",
                  }}
                >
                  Received
                </Text>
              </TouchableOpacity>
            </View>
            
          </LinearGradient>
          <Transfered/>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
