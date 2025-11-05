import { COLORS } from "@/constants/colors";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";


export default function FirstPage() {

    const NextPage = () => {

            router.push("/onboarding/SecondPage");
    }
    const SkipPage = () => {

            router.push("/onboarding/ThirdPage");
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                {/* Tombol Skip */}
                <TouchableOpacity
                    style={{
                        alignSelf: "flex-end",
                        padding: 10,
                    }}
                    onPress={SkipPage}
                >
                    <Text
                        style={{
                            fontFamily: "roboto",
                            fontWeight: "500",
                            color: "#000",
                            fontSize: 17,
                        }}
                    >
                        Skip
                    </Text>
                </TouchableOpacity>

                {/* Gambar */}
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 50 }}>
                    <Image
                        source={require("../../assets/onboarding/Coffee shop-bro.png")}
                        style={{ width: 300, height: 300, resizeMode: "contain" }}
                    />
                </View>

                {/* Teks Judul & Deskripsi */}
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 40,
                        paddingHorizontal: 15,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontFamily: "roboto",
                            fontWeight: "bold",
                            fontSize: 22,
                            color: "#000",
                        }}
                    >
                        Find Your Favorite Food
                    </Text>

                    <Text
                        style={{
                            textAlign: "center",
                            fontFamily: "roboto",
                            fontWeight: "400",
                            fontSize: 12,
                            color: "#666",
                            marginTop: 10,
                            lineHeight: 18,
                        }}
                    >
                        Discover a wide selection of dishes from local restaurants near you.
                        Whether you crave something spicy, sweet, or savory — we’ve got it
                        all ready to satisfy your taste anytime, anywhere.
                    </Text>
                </View>

                {/* Progres */}
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
                    <View
                        style={{
                            width: 25,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: COLORS.primary,
                            marginHorizontal: 3,
                        }}
                    />
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#E0E0E0",
                            marginHorizontal: 3,
                        }}
                    />
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#E0E0E0",
                            marginHorizontal: 3,
                        }}
                    />
                </View>

                {/* Tombol Next */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: "center",
                        marginBottom: 40,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary || "#FF6B00",
                            paddingVertical: 14,
                            paddingHorizontal: 110,
                            borderRadius: 10,
                        }}
                        onPress={NextPage}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontFamily: "roboto",
                                fontWeight: "600",
                                fontSize: 16,
                            }}
                        >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}