import { COLORS } from "@/constants/colors";
import { createClient } from "@supabase/supabase-js";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Check, Minus, Plus, Star } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
);

interface MenuItem {
    id: number;
    name: string;
    price: number;
    image_url: string;
    category: string;
    descr?: string;
    rating?: number;
}

export default function DetailFood() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [menu, setMenu] = useState<MenuItem | null>(null);
    const [isExtraPortionSelected, setIsExtraPortionSelected] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const fetchDetail = async () => {
        const { data, error } = await supabase
            .from("list_menu")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            console.error("Error fetching detail:", error);
            return;
        }
        setMenu(data);
    };

    useEffect(() => {
        fetchDetail();
    }, [id]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    if (!menu) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "#999" }}>Memuat detail makanan...</Text>
            </View>
        );
    }

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#fff" }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ position: "relative" }}>
                <Image
                    source={{ uri: menu.image_url }}
                    style={{ width: "100%", height: 350 }}
                />
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{
                        position: "absolute",
                        top: 40,
                        left: 20,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        padding: 8,
                        borderRadius: 50,
                    }}
                >
                    <ArrowLeft color="white" size={24} />
                </TouchableOpacity>
            </View>

            <View style={{
                padding: 20,
                marginTop: -20,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: '#fff'
            }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 22, fontWeight: "bold", color: "black", marginTop: 10 }}>
                        {menu.name}
                    </Text>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <Star color="#FFD700" fill="#FFD700" size={20} />
                        <Text style={{ marginLeft: 5, color: "#777" }}>
                            {"4.8"}
                        </Text>
                    </View>
                </View>

                <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.primary, marginTop: 10 }}>
                    Rp {menu.price.toLocaleString('id-ID')}
                </Text>

                <Text
                    style={{
                        marginTop: 15,
                        color: "#555",
                        lineHeight: 22,
                        fontSize: 15,
                    }}
                >
                    {menu.descr ||
                        "Makanan lezat yang dibuat dengan bahan segar dan penuh rasa. Cocok untuk dinikmati kapan saja."}
                </Text>
            </View>

            {/* Bagian "Add Some Extras" */}
            <View style={{
                backgroundColor: "rgba(201, 195, 195, 0.1)",
                paddingVertical: 15,
                paddingHorizontal: 20,
                marginTop: 10,
            }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>Add Some Extras</Text>
            </View>

            <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
                <TouchableOpacity
                    onPress={() => setIsExtraPortionSelected(!isExtraPortionSelected)}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 15,
                        borderBottomWidth: 1,
                        borderBottomColor: '#eee'
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Custom Checkbox */}
                        <View style={{
                            width: 22,
                            height: 22,
                            borderWidth: 2,
                            borderColor: isExtraPortionSelected ? COLORS.primary : '#ccc',
                            borderRadius: 4,
                            marginRight: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: isExtraPortionSelected ? COLORS.primary : '#fff'
                        }}>
                            {isExtraPortionSelected && <Check color="#fff" size={16} strokeWidth={3} />}
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>Extra Portion</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#555' }}>+Rp {(10000).toLocaleString('id-ID')}</Text>
                </TouchableOpacity>
            </View>

            {/* Bagian Input Jumlah */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginBottom: 10,
                gap: 20
            }}>
                <TouchableOpacity onPress={handleDecrement} style={{ padding: 10, backgroundColor: 'rgba(201, 195, 195, 0.2)', borderRadius: 50 }}>
                    <Minus size={24} color="#555" />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>
                    {quantity}
                </Text>
                <TouchableOpacity onPress={handleIncrement} style={{ padding: 10, backgroundColor: COLORS.primary, borderRadius: 50 }}>
                    <Plus size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Bagian Tombol "ADD TO CART" */}
            <View
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    backgroundColor: "#fff",
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        paddingVertical: 15,
                        borderRadius: 12,
                        alignItems: "center",
                    }}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                        ADD TO CART
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
