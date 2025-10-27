import React from "react";
import { View, TextInput } from "react-native";
import { Search } from "lucide-react-native";

export default function SearchFood() {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "transparent",
                backgroundColor: "rgba(201, 195, 195, 0.1)", 
                borderRadius: 10,
                padding: 10,
            }}
        >
            <TextInput
                placeholder="Search your food"
                placeholderTextColor="#888" 
                style={{
                    flex: 1,
                    padding: 10,
                    fontFamily: "roboto",
                    fontSize: 17,
                    color: "black",
                    backgroundColor: "transparent", 
                }}
            />
            <Search size={30} color="#000" />
        </View>
    );
}
