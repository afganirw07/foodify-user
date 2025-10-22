import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { navigate } from "expo-router/build/global-state/routing";

export default function splashScreens() {

  const toRegister = () => {
    setTimeout(() => {
      navigate("/auth/register");
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
