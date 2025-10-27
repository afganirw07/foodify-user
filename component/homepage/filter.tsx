import React from "react";
import { View, TextInput } from "react-native";
import { SlidersHorizontal } from "lucide-react-native";
import { COLORS } from "../../constants/colors";

export default function Filter() {


    return (
        <>
        <View style={{ backgroundColor: COLORS.primary, padding: 10, borderRadius: 10, width: 50}}>
            <SlidersHorizontal size={30} /> 
        </View>
        </>
    )
}