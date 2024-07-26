import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import axios from "axios";

import { Link } from "expo-router";
import ProductCard from "@/components/ProductCard/ProductCard";
import useFetch from "@/hooks/useFetch/useFetch";

import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
type RenderItemType = {
  item: ProductType;
};
const Products = () => {
  const { loading, error, productList } = useFetch(
    process.env.EXPO_PUBLIC_API_URL!
  );

  const renderProductList = ({ item }: RenderItemType) => (
    <ProductCard product={item} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View>
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
