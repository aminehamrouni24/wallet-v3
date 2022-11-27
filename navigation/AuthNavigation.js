import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Splash from "../screens/Splash";
import OnBoarding from "../screens/OnBoarding";
import Login from "../screens/Login";
import Register from "../screens/Register";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";
import NextRegister from "../screens/NextRegister";
import Verification from "../screens/Verification";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NextRegister" component={NextRegister} />

      <Stack.Screen name="SecondPage" component={SecondPage} />
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

