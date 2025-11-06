import React from "react";
import Profile from "@/component/profile/profil";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ProfileUser() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Profile />
        </SafeAreaView>
    )
}