import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "../components/Swiper";
import SecondPage from "../components/SecondPage";

const OnBoarding = () => {
  return (
    <SafeAreaView
      style={{
        // marginTop: 500,
      }}
    >
      <Swiper />
      <SecondPage/>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
