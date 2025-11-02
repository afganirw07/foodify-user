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
}: {
    selectedCategory: string | null;
}) {
    const [menu, setMenu] = useState<MenuItem[]>([]);

    const fetchMenu = async () => {
        let query = supabase.from("list_menu").select("*");
        if (selectedCategory) {
            query = query.eq("category", selectedCategory.toLowerCase());
        }

        const { data, error } = await query;
        if (error) {
            console.error("Error fetching menu:", error);
            return;
        }
        if (data) setMenu(data);
    };

    useEffect(() => {
        fetchMenu();
    }, [selectedCategory]);

    const renderItem = ({ item }: { item: MenuItem }) => (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                margin: 8,
                borderRadius: 12,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
                overflow: "hidden",
            }}
        >
            <Image
                source={{ uri: item.image_url }}
                style={{
                    width: "100%",
                    height: 120,
                    resizeMode: "cover",
                }}
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
                    {item.name}
                </Text>
                <Text style={{ color: "#777", marginTop: 4 }}>Rp {item.price}</Text>
            </View>
        </View>
    );

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
