import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ProductType } from "@/app";

type Props = {
  product: ProductType;
};
export default function ProductDetail(props: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.product.image }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{props.product.title}</Text>
        <Text style={styles.desc}>{props.product.description}</Text>
        <Text style={styles.price}>{props.product.price}$</Text>
      </View>
    </View>
  );
}
const deviceSize = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  desc: {
    fontStyle: "italic",
    paddingVertical: 5,
  },
  price: {
    fontStyle: "italic",
    fontSize: 22,
    textAlign: "right",
  },
});
