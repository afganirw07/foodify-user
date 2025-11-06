import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    Alert,
} from "react-native";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogOut, User, Clock, Edit3, ChevronRight, ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

const COLORS = {
    primary: "#f48507ff",
    secondary: "#FFD700",
    dark: "#1A1A1A",
    gray: "#888888",
    bgLight: "#ffffffff",
    white: "#FFFFFF",
    danger: "#FF4500",

    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 5,
    },
};

const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
);

const MenuItem = ({ icon: Icon, text, onPress, color = COLORS.dark, hideBorder = false }) => (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 14,
        }}
        onPress={onPress}
    >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon size={22} color={color} />
            <Text
                style={{
                    fontSize: 16,
                    marginLeft: 15,
                    fontWeight: "500",
                    color: color
                }}
            >
                {text}
            </Text>
        </View>
        {onPress && <ChevronRight size={20} color={COLORS.gray} />}
    </TouchableOpacity>
);

export default function Profile() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const userId = await AsyncStorage.getItem("userId");
            const cleanUserId = userId.replace(/"/g, "");
            if (userId) {
                const { data, error } = await supabase
                    .from("users")
                    .select("name, email")
                    .eq("id", cleanUserId)
                    .single();

                if (error) {
                    console.error("Error fetching user:", error);
                    Alert.alert("Error", "Failed to load user data.");
                    setUser(null);
                } else {
                    setUser(data);
                }
            } else {
                Alert.alert("Info", "User not logged in.");
                setUser(null);
            }

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleLogout = async () => {
        Alert.alert(
            "Log Out",
            "Are you sure you want to log out?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Logout",
                    onPress: async () => {
                        await AsyncStorage.removeItem("userId");
                        Alert.alert("Logged out", "You have been logged out.");
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
        );
    };

    if (loading) {
        return (
            <View
                style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.bgLight }}
            >
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: COLORS.bgLight }}
            contentContainerStyle={{ paddingBottom: 30 }}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontFamily: "roboto", fontWeight: '700', fontSize: 16 }}>Profil</Text>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{
                        position: "absolute",
                        left: 20,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        padding: 8,
                        borderRadius: 50,
                    }}
                >
                    <ArrowLeft color="white" size={24} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    alignItems: "center",
                    paddingVertical: 40,
                    backgroundColor: 'transparant',
                }}
            >
                <Image
                    source={{
                        uri:
                            "https://i.pinimg.com/736x/12/41/7b/12417b5cfabdeffcb0c55231aca15387.jpg",
                    }}
                    style={{
                        width: 110,
                        height: 110,
                        borderRadius: 55,
                        marginBottom: 10,
                        borderWidth: 4,
                        borderColor: COLORS.primary,
                    }}
                />
                <Text
                    style={{ fontSize: 24, fontWeight: "700", color: 'black', marginTop: 10 }}
                >
                    {user?.name || "Guest User"}
                </Text>
                <Text
                    style={{ color: 'black', fontSize: 14, opacity: 0.9 }}
                >
                    {user?.email || "No email available"}
                </Text>
                <View style={{ marginTop: 30, paddingHorizontal: 25, paddingVertical: 13, backgroundColor: COLORS.primary, borderRadius: 50 }}>
                    <TouchableOpacity>
                        <Text style={{fontWeight: 'bold', color: COLORS.white, textAlign: 'center'}}>Edit Profil</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={[{ marginHorizontal: 15,  backgroundColor: COLORS.white, borderTopWidth: 1, borderTopColor: COLORS.gray }]}
            >
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: COLORS.gray,
                        paddingHorizontal: 16,
                        paddingTop: 16,
                        paddingBottom: 8,
                        textTransform: 'uppercase',
                    }}
                >
                    AKUN & RIWAYAT
                </Text>

                <MenuItem
                    icon={User}
                    text="Detail Profil"
                    onPress={() => Alert.alert("Navigate", "Go to Profile Details Screen")}
                    color={COLORS.primary}
                />
                <MenuItem
                    icon={Clock}
                    text="Riwayat Pesanan"
                    onPress={() => Alert.alert("Navigate", "Go to Order History Screen")}
                />
                <MenuItem
                    icon={Edit3}
                    text="Ubah Kata Sandi"
                    onPress={() => Alert.alert("Navigate", "Go to Change Password Screen")}
                    hideBorder
                />
            </View>


            <View
                style={[{ marginHorizontal: 15, marginTop: 15, borderTopWidth: 1 , borderTopColor: COLORS.gray,     backgroundColor: COLORS.white }]}
            >
                <MenuItem
                    icon={LogOut}
                    text="Log Out"
                    onPress={handleLogout}
                    color={COLORS.danger}
                    hideBorder
                />
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: "center",
                    marginTop: 40,
                }}
            >
                <Text
                    style={{ color: COLORS.gray, fontSize: 12 }}
                >
                    Version 1.2.0
                </Text>
            </View>
        </ScrollView>
    );
}
