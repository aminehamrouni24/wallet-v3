import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";


const ThirdPage = () => {
  const navigation = useNavigation();
      let customFonts = {
        Cairo: require("../constants/fonts/Cairo-VariableFont_wght.ttf"),
        Philosopher: require("../constants/fonts/Philosopher-Regular.ttf"),
      };

      const [isLoaded] = useFonts(customFonts);
      if (!isLoaded) return null;
  return (
    <View
      style={{
        backgroundColor: "#0e044d",
        width: "100%",
        height: "100%",
      }}
    >
      <SafeAreaView
        style={{
          width: "90%",
          alignSelf: "center",
        }}
      >
        {/* Image part */}
        <Image
          source={require("../assets/onboard3.png")}
          resizeMode="contain"
          style={{
            width: 220,
            height: 200,
            tintColor: "#fff",
            alignSelf: "center",
            marginTop: 85,
            marginBottom: 35,
          }}
        />
        <View
          style={{
            width: 150,
            height: 150,
            borderBottomEndRadius: 120,
            borderTopEndRadius: 130,
            borderBottomStartRadius: 170,
            borderTopStartRadius: 90,
            backgroundColor: "rgba(255,250,255,0.15)",
            position: "absolute",
            top: 210,
            left: 50,
          }}
        ></View>
        <View
          style={{
            width: 150,
            height: 150,
            borderBottomEndRadius: 170,
            borderTopEndRadius: 90,
            borderBottomStartRadius: 120,
            borderTopStartRadius: 130,
            backgroundColor: "rgba(255,250,255,0.15)",
            position: "absolute",
            top: 210,
            left: 170,
          }}
        ></View>
        {/* Text Part */}
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            marginTop: 35,
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              letterSpacing: 2,
              // fontWeight: "bold"
              fontFamily: "Philosopher",
              color: "gold",
            }}
          >
            Reach your
          </Text>
          <Text
            style={{
              fontSize: 32,
              letterSpacing: 2,
              // fontWeight: "bold",
              fontFamily: "Philosopher",
              color: "gold",
            }}
          >
            goals with ease
          </Text>
        </View>

        {/* ****** */}
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            marginTop: 35,
            marginBottom: 120,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "justify",
              fontFamily: "Philosopher",
              color: "white",
            }}
          >
            Be part of an innovative asset be part of the future , The Gold
            Crypto-currency ...
          </Text>
        </View>
        {/* Skip Part */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 120,
              height: 60,
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                padding: 2,
                alignItems: "center",
                fontSize: 15,
                marginTop: 15,
                color: "#0e044d",
              }}
            >
              Join Us
            </Text>
          </TouchableOpacity>

          {/* ******** */}

          <TouchableOpacity
            style={{
              backgroundColor: "gold",
              width: 60,
              height: 60,
              borderBottomEndRadius: 400,
              borderTopEndRadius: 400,
              borderBottomStartRadius: 400,
              borderTopStartRadius: 400,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Image
              source={require("../assets/tick.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                zIndex: 100,
                tintColor: "#0e044d",
                margin: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ThirdPage;
