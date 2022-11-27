import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Coins from "../components/Coins";
import MyCharts from "../components/MyCharts";

const Home = () => {
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
        {/* header part */}
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            height: 350,
            margin: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 7,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "Cairo",
                  fontSize: 16,
                }}
              >
                Welcome Back
              </Text>
              <Text
                style={{
                  fontFamily: "CairoBold",
                  fontSize: 18,
                  color: "#0e044d",
                }}
              >
                Amine Hamrouni
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/notif.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 40,
                  tintColor: "#0e044d",
                  margin: 10,
                }}
              />
            </View>
          </View>

          <LinearGradient
            colors={["lightgrey", "#fff"]}
            style={{
              width: "95%",
              height: 105,
              backgroundColor: "rgba(255,255,255,0.7)",
              alignSelf: "center",
              marginTop: 50,
              borderRadius: 20,
            }}
          >
            <View>
              <Image
                source={require("../assets/profile.png")}
                resizeMode="contain"
                style={{
                  width: 90,
                  height: 120,
                  position: "absolute",
                  zIndex: 100,
                  left: 120,
                  top: -60,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
                margin: 10,
                marginTop: 35,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Cairo",
                    fontSize: 18,
                    color: "grey",
                  }}
                >
                  Total balance
                </Text>
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 16,
                    color: "grey",
                  }}
                >
                  $00.00
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Cairo",
                    fontSize: 18,
                    color: "grey",
                  }}
                >
                  Gain/Lose
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Philosopher",
                      fontSize: 16,
                      color: "lightgreen",
                    }}
                  >
                    %0{" "}
                  </Text>
                  <Image
                    source={require("../assets/rarrow.png")}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 25,
                      tintColor: "lightgreen",
                    }}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: "goldenrod",
                height: 60,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/receive.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 60,
                    tintColor: "white",
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Philosopher",
                    fontSize: 16,
                  }}
                >
                  Receive
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 150,
                backgroundColor: "#0e044d",
                height: 60,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/send.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 60,
                    tintColor: "white",
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Philosopher",
                    fontSize: 16,
                  }}
                >
                  Send
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* End header part */}
        {/* ************************************************ */}
        {/* Coins part */}
        {/* <View
          style={{
            width: "80%",
            alignSelf: "center",
            // borderColor: "black",
            // borderWidth: 1,
            marginTop: -165,
            padding: 10,
            zIndex: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 300,
              height: 55,
              alignSelf: "center",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Philosopher",
                fontSize: 16,
                color: "rgba(0,0,255,0.6)",
                padding: 5,
              }}
            >
              Add a new Coin
            </Text>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(255,255,255,0.85)",
                padding: 8,

                borderRadius: 20,
              }}
              onPress={showHandle}
            >
              <Image
                source={require("../assets/plus2.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "rgba(0,0,255,0.6)",
                }}
              />
            </TouchableOpacity>
          </View>
        </View> */}
        {/* {show ? <Coins /> : null} */}
        {/* End Coins Part */}

        <MyCharts />
        <View
          style={{
            margin: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: 350,
              backgroundColor: "#0e044d",
              height: 60,
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate("Wallet")}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/coin212.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 60,
                  marginRight: 15,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontFamily: "Philosopher",
                  fontSize: 16,
                }}
              >
                Discover our coins
              </Text>
              <Image
                source={require("../assets/plus2.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 60,
                  marginLeft: 15,
                  tintColor: "goldenrod",
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
