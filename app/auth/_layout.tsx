import { Stack } from "expo-router";
import React from "react";

export default function AuthLoyout() {

    return (
        <Stack 
        screenOptions={{
            headerShown: false,
            animation: 'flip',
        }} />
    )
}