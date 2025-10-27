import { Menu } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

export default function Sidebar() {


    return (
            <View style={{ backgroundColor: "#eae7e7ff", padding: 10, borderRadius: 50, width: 50 }}>
                <Menu size={30} />
            </View>
    )
}

