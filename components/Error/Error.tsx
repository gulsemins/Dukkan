import React from "react";
import LottieView from "lottie-react-native";
function Error() {
  return (
    <LottieView
      style={{
        flex: 1,
        backgroundColor: "#eee",
      }}
      source={require("@/assets/error.json")}
      autoPlay
    />
  );
}

export default Error;
