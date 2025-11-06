import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { View } from "react-native";

export default function SplashScreen() {

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        const getStarted = await AsyncStorage.getItem('getStarted');
        
        setTimeout(() => {
          if (userId) {
            router.replace("/homepage/page");
          } else if (getStarted) {
            router.replace("/auth/register");
          } else {
            router.replace("/onboarding/FirstPage");
          }
        }, 3000);
      } catch (e) {
        console.error("Failed to fetch user status:", e);
        setTimeout(() => router.replace("/auth/register"), 3000);
      }
    };

    checkUserStatus();
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
