import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homepage() {

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Homepage</Text>
        </SafeAreaView>
    )
}