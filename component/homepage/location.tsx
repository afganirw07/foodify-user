import { MapPin } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

export default function LocationRestaurant() {

    return (
            <View style={{ flexDirection: "row", gap: 8 }}>
                <MapPin size={30} />
                <Text style={{ color: "#000", fontFamily: "roboto", fontSize: 17, fontWeight: "bold", marginTop: 4 }}>Maison de Lumière</Text>
            </View>
    )
}