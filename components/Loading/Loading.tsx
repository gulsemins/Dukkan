import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Text } from "react-native";
function Loading() {
  console.log("loading");
  return (
    <LottieView
      style={{
        flex: 1,
        backgroundColor: "#eee",
      }}
      source={require("../../assets/loading.json")}
      autoPlay
    />
  );
}

export default Loading;
