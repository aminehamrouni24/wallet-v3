import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Wallet from "../screens/Wallet";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import Transactions from "../screens/Transactions";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          } else if (route.name === "Wallet") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Transactions") {
            iconName = focused
              ? "newspaper"
              : "newspaper-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#FA8072",
        tabBarInactiveTintColor: "gray",
     
        headerShown: false,
    
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
