import ProductCard from "@/components/ProductCard/ProductCard";
import ProductDetail from "@/components/ProductCard/ProductDetail";
import useFetch from "@/hooks/useFetch/useFetch";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const { loading, error, productList } = useFetch(
    `${process.env.EXPO_PUBLIC_API_URL!}/${id}`
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: productList.title,
        }}
      />
      <ProductDetail product={productList} />
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
