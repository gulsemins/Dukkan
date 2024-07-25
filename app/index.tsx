import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import axios from "axios";

import { Link } from "expo-router";
import ProductCard from "@/components/ProductCard/ProductCard";
type RenderItemType = {
  item: ProductType;
};
const Products = () => {
  console.log(process.env.EXPO_PUBLIC_API_URL);

  const [productList, setProductList] = useState([]);
  async function fetchData() {
    const response = await axios.get(process.env.EXPO_PUBLIC_API_URL!);
    console.log(response.data);

    setProductList(response.data);
  }
  const renderProductList = ({ item }: RenderItemType) => (
    <ProductCard product={item} />
  );
  return (
    <View>
      <Text>home page</Text>
      <Link href={"/Details"}>go to details</Link>
      <FlatList data={productList} renderItem={renderProductList} />

      <Button title="fetch" onPress={fetchData} />
    </View>
  );
};

export default Products;
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
