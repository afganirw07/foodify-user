import React from "react";
import { View, Text } from "react-native";
import Cart from "@/component/cart/cart";

export default function CartUser() {

    return (
        <>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Text>Cart</Text>
        <Cart />
        </View>
        </>
    )
}