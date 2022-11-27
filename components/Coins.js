import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Carousel, { PaginationLight } from "react-native-x-carousel";

const { width } = Dimensions.get("window");
const img = "../assets/image.png";
const img1 = "../assets/image.png";
const img2 = "../assets/image.png";
const img3 = "../assets/image.png";
const img4 = "../assets/image.png";
const img5 = "../assets/image.png";
const img6 = "../assets/image.png";
const img7 = "../assets/image.png";

const DATA = [
  {
    coverImageUri: require(img),
    cornerLabelColor: "#FFD300",
    cornerLabelText: "GOTY",
    key: 1,
  },
  {
    coverImageUri: require(img1),
    cornerLabelColor: "#0080ff",
    cornerLabelText: "NEW",
    key: 2,
  },
  {
    coverImageUri: require(img2),
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-75%",
    key: 3,
  },
  {
    coverImageUri: require(img3),
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-20%",
    key: 4,
  },
  {
    coverImageUri: require(img4),
    cornerLabelColor: "#0080ff",
    cornerLabelText: "NEW",
    key: 5,
  },
  {
    coverImageUri: require(img5),
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-75%",
    key: 6,
  },
  {
    coverImageUri: require(img6),
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-20%",
    key: 7,
  },
  {
    coverImageUri: require(img7),
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-20%",
    key: 8,
  },
];

const Coins = () => {
  const renderItem = (data) => (
    <View key={data.key} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={data.coverImageUri} />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
    borderRadius: 20,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    borderRadius: 20,
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});

export default Coins;

{
  /* <Image
  source={require("../assets/image.png")}
  resizeMode="contain"
  style={{
    width: 330,
    height: 180,
  }}
/> */
}
