import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
 
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoNumber from "../components/PhoNumber";
import { useNavigation } from "@react-navigation/native";

const NextRegister = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        width: "90%",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          marginTop: 20,
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
          Register
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 2,
            width: 150,
            backgroundColor: "rgba(255,255,252,0.45)",
            height: 60,
            alignItems: "center",
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../assets/google.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              margin: 2,
            }}
          />
          <Text>GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 2,
            width: 150,
            backgroundColor: "rgba(255,255,252,0.45)",
            height: 60,
            alignItems: "center",
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Image
            source={require("../assets/facebook.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              margin: 2,
            }}
          />
          <Text>FACEBOOK</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "grey",
          }}
        >
          or
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            width: 340,
            height: 55,
            backgroundColor: "rgba(255,255,252,0.65)",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: "lightGrey",
            padding: 15,
            margin: 10,
          }}
          placeholder="Full name"
          placeholderTextColor="grey"
        />
        <TextInput
          style={{
            width: 340,
            height: 55,
            backgroundColor: "rgba(255,255,252,0.65)",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: "lightGrey",
            padding: 15,
            margin: 10,
          }}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <TextInput
          style={{
            width: 340,
            height: 55,
            backgroundColor: "rgba(255,255,252,0.65)",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: "lightGrey",
            padding: 15,
            margin: 10,
          }}
          keyboardType="visible-password"
          placeholder="Password"
          placeholderTextColor="grey"
        />
        <TextInput
          style={{
            width: 340,
            height: 55,
            backgroundColor: "rgba(255,255,252,0.65)",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: "lightGrey",
            padding: 15,
            margin: 10,
          }}
          keyboardType="visible-password"
          placeholder="Confirm Password"
          placeholderTextColor="grey"
        />
      </View>
      {/* *********** */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 2,
          width: 350,
          backgroundColor: "rgba(0,0,255,0.55)",
          height: 50,
          alignItems: "center",
          borderRadius: 20,
          marginTop: 29,
        }}
        onPress={() => navigation.navigate("Verification")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          REGISTER
        </Text>
      </TouchableOpacity>
      {/* *********** */}

      <View>
        {/* ******** */}

        {/* ************ */}
        <View
          style={{
            marginTop: 120,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              // fontWeight:"bold"
            }}
          >
            Already have an account ?
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              // justifyContent: "space-evenly",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                fontSize: 14,
                color: "blue",
                fontWeight: "bold",
                margin: 5,
              }}
            >
              LOGIN
            </Text>
            <Image
              source={require("../assets/arrow.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "blue",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* *********** */}
    </SafeAreaView>
  );
};

export default NextRegister;

const styles = StyleSheet.create({});
