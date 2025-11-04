import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Menu } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Sidebar() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ backgroundColor: "#eae7e7ff", padding: 10, borderRadius: 50, width: 50 }}>
            <Menu size={30} />
        </TouchableOpacity>
    )
}
