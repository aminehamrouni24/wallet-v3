import React from "react";
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import PhoneInput from "react-native-phone-number-input";


const PhoNumber = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const phoneInput = React.useRef(null);

  const OnPress = () => {
    if (phoneNumber.length !== 0) {
      Alert.alert("Confirm Number", phoneNumber, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },

        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  phoneContainer: {
    width: "95%",
    height: 50,
    borderRadius: 10,
  },

  textInput: {
    paddingVertical: 0,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
});

export default PhoNumber;