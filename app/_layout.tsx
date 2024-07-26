import React from "react";
import { View, Text, Button } from "react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#64b5f6",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Product" }} />
      <Stack.Screen
        name="details/[id]"
        options={{ title: "Product Details" }}
      />
    </Stack>
  );
}
