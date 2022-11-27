import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

import React from "react";


const SecondPage = () => {
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
          source={require("../assets/onboard2.png")}
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
            width: 120,
            height: 120,
            borderBottomEndRadius: 120,
            borderTopEndRadius: 130,
            borderBottomStartRadius: 170,
            borderTopStartRadius: 90,
            backgroundColor: "rgba(255,250,255,0.15)",
            position: "absolute",
            top: 250,
            left: 30,
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
            top: 70,
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
              letterSpacing: 1,
              // fontWeight: "bold",
              fontFamily: "Philosopher",
              color: "gold",
            }}
          >
            Track your money
          </Text>
          <Text
            style={{
              fontSize: 32,
              letterSpacing: 1,
              // fontWeight: "bold",
              fontFamily: "Philosopher",
              color: "gold",
            }}
          >
            Trust our system
          </Text>
        </View>

        {/* ****** */}
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            marginTop: 35,
            marginBottom: 150,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "justify",
              fontFamily: "Philosopher",
              color: "#fff",
            }}
          >
            Stay on top effortessly by tracking your subscriptions and bills ..
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
            <Text
              style={{
                padding: 2,
                alignItems: "center",
                fontSize: 15,
                marginTop: 15,
                color: "#0e044d",
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>

          {/* ******** */}
          <Text
            style={{
              padding: 2,
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 15,
              color: "#fff",
            }}
          >
            . . .
          </Text>

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
            onPress={() => navigation.navigate("ThirdPage")}
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
              2/3
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({});
