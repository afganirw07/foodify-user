import { COLORS } from "@/constants/colors";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

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
}

export default function MenuRestaurant({
    selectedCategory,
    searchQuery,
}: {
    selectedCategory: string | null;
    searchQuery?: string;
}) {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchMenu = async () => {
        setLoading(true);
        let query = supabase.from("list_menu").select("*");

        if (selectedCategory) {
            query = query.eq("category", selectedCategory.toLowerCase());
        }

        if (searchQuery && searchQuery.trim() !== "") {
            query = query.ilike("name", `%${searchQuery.trim()}%`);
        }

        const { data, error } = await query;
        setLoading(false);

        if (error) {
            console.error("Error fetching menu:", error);
            return;
        }
        setMenu(data || []);
    };

    useEffect(() => {
        fetchMenu();
    }, [selectedCategory, searchQuery]);

    const NotFoundFood = () => (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 60,
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    color: "#777",
                    fontWeight: "500",
                }}
            >
                Maaf, makanan tidak ditemukan
            </Text>
        </View>
    );

    const renderItem = ({ item }: { item: MenuItem }) => (
        <View
            style={{
                flex: 1,
                margin: 8,
                elevation: 3,
                overflow: "hidden",
            }}
        >
            <Image
                source={{ uri: item.image_url }}
                style={{ width: "100%", height: 150, resizeMode: "cover", borderRadius: 10}}
            />
            <View style={{ padding: 3, marginTop: 6 }}>
                <Text style={{ fontSize: 16, color: "black", marginTop: 2 }}>
                    {item.name}
                </Text>
                <Text style={{ color: COLORS.primary, marginTop: 15, fontSize: 16, fontWeight: "400"}}>Rp {item.price}</Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={{ alignItems: "center", marginTop: 40 }}>
                <Text style={{ color: "#999" }}>Memuat menu...</Text>
            </View>
        );
    }

    if (menu.length === 0) {
        return <NotFoundFood />;
    }

    return (
        <FlatList
            data={menu}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
    );
}
