import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
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
          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginRight: -45,
              }}
            >
              <Image
                source={require("../assets/qr.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                marginRight: -45,
              }}
            >
              <Image
                source={require("../assets/scan.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "CairoBold",
                fontSize: 38,
                color: "#0e044d",
                letterSpacing: 1,
              }}
            >
              Settings
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.2)",
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "flex-start",
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: 10,
            }}
          >
            <Image
              source={require("../assets/profile.png")}
              resizeMode="contain"
              style={{
                width: 80,
                height: 60,
              }}
            />
            <View>
              <Text
                style={{
                  color: "grey",
                  fontFamily: "Cairo",
                }}
              >
                Happy to see you again
              </Text>
              <Text
                style={{
                  color: "black",
                  fontFamily: "CairoBold",
                  fontSize: 20,
                }}
              >
                Amine Hamrouni
              </Text>
            </View>
          </View>

          {/* ************** */}

          <View
            style={{
              paddingHorizontal: 40,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/avatar.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 40,
                tintColor: "goldenrod",
                // rgba(0,0,255,0.6)
              }}
            />
            <Text
              style={{
                fontFamily: "CairoBold",
                fontSize: 16,
                margin: 7,
                marginLeft: 30,
                letterSpacing: 1,
              }}
            >
              Manage Account
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              flexDirection: "row",
              justifyContent: "flex-start",

              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/card.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: "goldenrod",
                // rgba(0,0,255,0.6)
              }}
            />
            <Text
              style={{
                fontFamily: "CairoBold",
                fontSize: 16,
                margin: 7,
                marginLeft: 25,
                letterSpacing: 1,
              }}
            >
              Manage Cards
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/lock2.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: "goldenrod",
                // rgba(0,0,255,0.6)
              }}
            />
            <Text
              style={{
                fontFamily: "CairoBold",
                fontSize: 16,
                margin: 7,
                marginLeft: 30,
                letterSpacing: 1,
              }}
            >
              Change Password
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/bill.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: "goldenrod",
                // rgba(0,0,255,0.6)
              }}
            />
            <Text
              style={{
                fontFamily: "CairoBold",
                fontSize: 16,
                margin: 7,
                marginLeft: 30,
                letterSpacing: 1,
              }}
            >
              Invoice
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/about.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: "goldenrod",
                // rgba(0,0,255,0.6)
              }}
            />
            <Text
              style={{
                fontFamily: "CairoBold",
                fontSize: 16,
                margin: 7,
                marginLeft: 30,
                letterSpacing: 1,
              }}
            >
              About Us
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/password.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: "goldenrod",
                // rgba(0,0,255,0.6)
              }}
            />
            <Text
              style={{
                fontFamily: "CairoBold",
                fontSize: 16,
                margin: 7,
                marginLeft: 30,
                letterSpacing: 1,
              }}
            >
              Check Verification
            </Text>
          </View>

          <View>
            <TouchableOpacity
              style={{
                width: 280,
                backgroundColor: "#0e044d",
                height: 50,
                alignSelf: "center",
                margin: 15,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "CairoBold",
                  fontSize: 20,
                  letterSpacing: 2,
                  margin: 5,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
