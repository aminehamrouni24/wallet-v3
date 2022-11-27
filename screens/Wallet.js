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
import Coins from "../components/Coins";
const Wallet = () => {
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
          {/* Header part */}
          <LinearGradient
            style={{
              width: "90%",
              height: 330,
              backgroundColor: "rgba(255,255,255,0.6)",
              alignSelf: "center",
              marginTop: 50,
              borderRadius: 50,
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
                  fontSize: 26,
                  color: "#0e044d",
                }}
              >
                Balance
              </Text>
              <Image
                source={require("../assets/wallet.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 40,
                  tintColor: "#0e044d",
                  margin: 10,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: -20,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Cairo",
                  fontSize: 32,
                  textAlign: "center",
                  color: "goldenrod",
                }}
              >
                $ 00.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center",
                alignItems: "center",
                margin: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "white",
                  borderRadius: 20,
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Image
                  source={require("../assets/uk.png")}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100 / 4,
                    overflow: "hidden",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Cairo",
                    fontSize: 16,
                    color: "goldenrod",
                  }}
                >
                  £ 00.00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "white",
                  borderRadius: 20,
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Image
                  source={require("../assets/america.png")}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100 / 4,
                    overflow: "hidden",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Cairo",
                    fontSize: 16,
                    color: "goldenrod",
                  }}
                >
                  $ 00.00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "white",
                  borderRadius: 20,
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <Image
                  source={require("../assets/europe.png")}
                  resizeMode="contain"
                  style={{
                    width: 70,
                    height: 60,
                    borderRadius: 100 / 4,
                    overflow: "hidden",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Cairo",
                    fontSize: 16,
                    color: "goldenrod",
                  }}
                >
                  € 00.00
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: -25,
                fontFamily: "Philosopher",
                fontSize: 16,
              }}
            >
              No coin Detected !!
            </Text>
          </LinearGradient>
          <View
            style={{
              width: "80%",
              alignSelf: "center",

              marginTop: -35,
              padding: 10,
              zIndex: 200,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 300,
                height: 55,
                alignSelf: "center",
                backgroundColor: "#0e044d",
                borderRadius: 20,
                padding: 10,
                borderColor: "lightgrey",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "Philosopher",
                  fontSize: 16,
                  color: "white",
                  padding: 5,
                }}
              >
                Add a new Coin
              </Text>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(255,255,255,0.9)",

                  borderRadius: 20,
                }}
                onPress={showHandle}
              >
                <Image
                  source={require("../assets/nfc.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: "#0e044d",
                    // rgba(0,0,255,0.6)
                  }}
                />
              </TouchableOpacity>
            </View>
            {show ? <Coins /> : null}
          </View>
          {/* End header part */}

          {/* services part */}
          <View
            style={{
              margin: 2,
            }}
          >
            <Text
              style={{
                fontFamily: "Philosopher",
                fontSize: 18,
                color: "#0e044d",
                marginLeft: 30,
                marginBottom: 15,
              }}
            >
              My Services
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              marginTop: -10,
            }}
          >
            <LinearGradient
              style={{
                width: "40%",
                height: 100,
                backgroundColor: "rgba(255,255,255,0.6)",
                alignSelf: "center",
                margin: 5,
                borderRadius: 10,
                shadowColor: "white",
                shadowOpacity: 0.8,
                borderColor: "rgb(255,255,255)",
                borderWidth: 1,
                alignItems: "center",
              }}
              colors={["lightgrey", "#fff"]}
            >
              <TouchableOpacity
                style={{
                  width: "85%",
                  height: 60,
                  margin: 10,
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/trans2.png")}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 40,
                    tintColor: "#0e044d",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 16,
                    color: "goldenrod",
                  }}
                >
                  Transfer
                </Text>
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 14,
                  }}
                >
                  To another card
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={{
                width: "40%",
                height: 100,
                backgroundColor: "rgba(255,255,255,0.6)",
                alignSelf: "center",
                margin: 5,
                borderRadius: 10,
                shadowColor: "white",
                shadowOpacity: 0.8,
                borderColor: "rgb(255,255,255)",
                borderWidth: 1,
              }}
              colors={["lightgrey", "#fff"]}
            >
              <TouchableOpacity
                style={{
                  width: "85%",
                  height: 100,

                  margin: 10,
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/topup.png")}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 40,
                    tintColor: "#0e044d",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 18,
                    color: "goldenrod",
                  }}
                >
                  Top up
                </Text>
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 14,
                  }}
                >
                  To my card
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <LinearGradient
            style={{
              width: "90%",
              height: 70,
              backgroundColor: "rgba(255,255,255,0.5)",
              alignSelf: "center",
              borderRadius: 50,
              margin: 10,
              shadowColor: "white",
              shadowOpacity: 0.8,
              borderColor: "rgb(255,255,255)",
              borderWidth: 1,
              alignItems: "center",
            }}
            colors={["lightgrey", "#fff"]}
          >
            <TouchableOpacity
              style={{
                width: "85%",
                height: 130,
                alignSelf: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: -30,
              }}
            >
              <View>
                <Image
                  source={require("../assets/bill.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: "#0e044d",
                    marginRight: 20,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 18,
                    color: "goldenrod",
                    letterSpacing: 1,
                  }}
                >
                  Account Statements
                </Text>
                <Text
                  style={{
                    fontFamily: "Philosopher",
                    fontSize: 14,
                  }}
                >
                  Bills , details ...
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          {/* ///////////////// */}
          <View
            style={{
              width: "90%",
              alignSelf: "center",

              marginTop: 2,
              padding: 10,
              zIndex: 200,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 350,
                height: 54,
                alignSelf: "center",
                backgroundColor: "#0e044d",
                borderRadius: 20,
                padding: 10,
                borderColor: "lightgrey",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "Philosopher",
                  fontSize: 16,
                  color: "white",
                  padding: 5,
                }}
              >
                Explore more services
              </Text>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(255,255,255,0.9)",

                  borderRadius: 20,
                  padding: 2,
                }}
              >
                <Image
                  source={require("../assets/plus2.png")}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: "#0e044d",
                    // rgba(0,0,255,0.6)
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* End services part */}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
