    import { createClient } from "@supabase/supabase-js";
    import React, { useEffect, useState } from "react";
    import { FlatList, Image, Text, View, ScrollView } from "react-native";

    const supabase = createClient(
        process.env.EXPO_PUBLIC_SUPABASE_URL,
        process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
    );

    export default function MenuRestaurant() {
        const [menu, setMenu] = useState([]);

        const fetchMenu = async () => {
            const { data, error } = await supabase.from("list_menu").select("*");
            if (error) {
                console.error("Error fetching menu:", error);
                return;
            }
            if (data) setMenu(data);
        };

        useEffect(() => {
            fetchMenu();
        }, []);

        const renderItem = ({ item }) => (
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
            <ScrollView style={{}}>
                <FlatList
                    data={menu}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
        );
    }
