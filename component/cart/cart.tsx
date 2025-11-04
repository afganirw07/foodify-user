import React from "react";
import { View, Text } from "react-native";


export default function Cart() {


    return (
        <>
        <View>
            <Text>Cart</Text>
        </View>
        </>
    )
}// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // ... plugin lain
      "react-native-reanimated/plugin", // Tambahkan ini di baris terakhir
    ],
  };
};
