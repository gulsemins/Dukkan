import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";

import { Link } from "expo-router";
import ProductCard from "@/components/ProductCard/ProductCard";
type RenderItemType = {
  item: ProductType;
};
const Products = () => {
  console.log(process.env.EXPO_PUBLIC_API_URL);

  const [error, setError] = useState(null);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(process.env.EXPO_PUBLIC_API_URL!);
      console.log(response.data);

      setProductList(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  const renderProductList = ({ item }: RenderItemType) => (
    <ProductCard product={item} />
  );
  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View>
      <Link href={"/Details"}>go to details</Link>
      <FlatList data={productList} renderItem={renderProductList} />
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
