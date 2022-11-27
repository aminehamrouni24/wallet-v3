import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransactionHistory = () => {
  return (
    <View>
      <View style={styles.transaction}>
        <View style={styles.circle}>
          <Text style={{ margin: 10, textAlign: "center" }}>Logo</Text>
        </View>
        <View
          style={{
            margin: 5,
            borderWidth: 2,
            borderColor: "rgba(0,0,255,0.6)",
            borderStyle: "dotted",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>Service Type</Text>
          <Text style={{ textAlign: "center" }}>Date </Text>
        </View>
        <View
          style={{
            margin: 5,
            borderWidth: 2,
            borderColor: "rgba(0,0,255,0.6)",
            borderStyle: "dotted",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>Amount</Text>
        </View>
      </View>
    </View>
  );
}

export default TransactionHistory

const styles = StyleSheet.create({

  transaction: {
    width: 350,
    height: 75,
    borderWidth: 2,
    borderStyle: "dotted",
    alignSelf: "center",
    margin: 7,
    borderRadius: 20,
    borderColor: "rgba(0,0,255,0.6)",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderStyle: "dotted",
    margin: 5,
    borderRadius: 100,
    borderColor: "rgba(0,0,255,0.6)",
  },
});