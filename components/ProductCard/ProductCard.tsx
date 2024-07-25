import { ProductType } from "@/app";
import React from "react";
import { View, Text, Button, FlatList } from "react-native";

type Props = {
  product: ProductType;
};

const ProductCard = (props: Props) => {
  return (
    <View>
      <Text>{props.product.title}</Text>
      <Text>{props.product.price}</Text>
    </View>
  );
};
export default ProductCard;
