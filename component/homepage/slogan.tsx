import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../constants/colors";


export default function Slogan() {

    return (
        <>
            <View style={{}}>
                <Text style={{ color: "#000", fontFamily: "roboto", fontSize: 35, marginTop: 4 }}>Find The <Text style={{ color: COLORS.primary, fontFamily: "roboto", fontSize: 35, fontWeight: "bold"}}>Best Food</Text> Around You</Text>
            </View>
        </>
    )
}