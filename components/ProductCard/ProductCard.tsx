import { ProductType } from "@/app";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

type Props = {
  product: ProductType;
};

const ProductCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.product.image }} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{props.product.title}</Text>
        <Text style={styles.price}>{props.product.price}</Text>
      </View>
    </View>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    margin: 5,
    borderColor: "#bdbdbd",
    borderWidth: 1,
    flexDirection: "row",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  body_container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    textAlign: "right",
    padding: 5,
    fontSize: 16,
    fontStyle: "italic",
  },
});
