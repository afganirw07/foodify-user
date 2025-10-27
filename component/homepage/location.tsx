import { MapPin } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LocationRestaurant() {

    return (
        <SafeAreaView>
            <View style={{ flexDirection:"row" }}>
                <MapPin />
                <Text style={{ color: "#000" }}> Hello wordd</Text>

            </View>
        </SafeAreaView>
    )
}