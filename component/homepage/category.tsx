import { COLORS } from "@/constants/colors";
import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL!,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Category({
    onCategorySelect,
}: {
    onCategorySelect: (category: string | null) => void;
}) {
    const [categories, setCategories] = useState<
        { name: string; isSelected: boolean }[]
    >([]);

    const fetchCategories = async () => {
        const { data, error } = await supabase.from("list_menu").select("category");
        if (error) {
            console.error("Error fetching categories:", error);
            return;
        }

        if (data) {
            const uniqueCategories = [...new Set(data.map((item) => item.category))];
            const initialCategories = uniqueCategories.map((category) => ({
                name:
                    typeof category === "string"
                        ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
                        : category,
                isSelected: false,
            }));
            setCategories(initialCategories);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSelect = (selected: string) => {
        setCategories((prev) =>
            prev.map((cat) => ({
                ...cat,
                isSelected: cat.name === selected ? !cat.isSelected : false,
            }))
        );

        onCategorySelect((prev) => (prev === selected ? null : selected));
    };

    return (
        <View
            style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: "#fff" }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginBottom: 15,
                }}
            >
                <Text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>
                    Find something delicious
                </Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 5 }}
            >
                {categories.map((category, index) => {
                    const isSelected = category.isSelected;

                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 10,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                marginRight: 10,
                                minWidth: 90,
                                backgroundColor: isSelected
                                    ? COLORS.primary
                                    : "rgba(201, 195, 195, 0.1)",
                                borderWidth: isSelected ? 0 : 1,
                                borderColor: isSelected
                                    ? COLORS.primary
                                    : "rgba(201, 195, 195, 0.5)",
                            }}
                            onPress={() => handleSelect(category.name)}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: isSelected ? "white" : "black",
                                }}
                            >
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}
