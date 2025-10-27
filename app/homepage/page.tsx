import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationRestaurant from "@/component/homepage/location";

export default function Homepage() {

    return (
        <SafeAreaView>
            <LocationRestaurant />
        </SafeAreaView>
    )
}