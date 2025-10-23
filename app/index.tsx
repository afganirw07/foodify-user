import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { View } from "react-native";

export default function splashScreens() {

  const toRegister = () => {
    setTimeout(() => {
      router.replace("/auth/register");
    }, 3000);
  }

  useEffect(() => {
    toRegister();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("../assets/splashScreens/animasi.json")}
        autoPlay
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
