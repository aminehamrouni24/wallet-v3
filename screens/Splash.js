import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const Splash = () => {
  const navigation = useNavigation();
  let customFonts = {
    Cairo: require("../constants/fonts/Cairo-VariableFont_wght.ttf"),
    Philosopher: require("../constants/fonts/Philosopher-Regular.ttf"),
  };

  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) return null;
  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={["#0e044d", "#0e044d"]}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View>
          <Image
            source={require("../assets/eight-logo.png")}
            resizeMode="contain"
            style={{
              width: 220,
              height: 250,
              position: "absolute",
              top: 150,
              left: 90,
            }}
          />
        </View>

        {/* ************* */}
        <View
          style={{
            top: 470,
            width: 350,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Philosopher",
              fontSize: 28,
              letterSpacing: 2,

              color: "white",
              textAlign: "center",
            }}
          >
            Seamlessly Handle
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: "Cairo",
                fontSize: 26,
                margin: 4,

                // fontWeight: "bold",
                color: "gold",
                textAlign: "center",
              }}
            >
              GOLD
            </Text>
            <Text
              style={{
                fontFamily: "Cairo",
                fontSize: 26,
                // fontWeight: "bold",
                color: "white",
                textAlign: "center",
                margin: 4,
              }}
            >
              Crypto Currency
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "85%",
            backgroundColor: "rgba(255,255,255,0.85)",
            height: 65,
            borderRadius: 50,
            top: 600,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("OnBoarding")}
        >
          <View>
            <Text
              style={{
                color: "#0e044d",
                fontFamily: "Cairo",
                fontSize: 20,
                textAlign: "center",
                padding: 12,
              }}
            >
              Let's Discover
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
