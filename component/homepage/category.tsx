import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/colors";

export default function Category() {
    // Data untuk kategori makanan
    const categories = [
        { name: "Burger", isSelected: true },
        { name: "Pizza", isSelected: false },
        { name: "Hotdog", isSelected: false },
        { name: "Fried Chicken", isSelected: false },
        { name: "Snack", isSelected: false },
    ];

    return (
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>

            <View style={{ flexDirection: "row", alignItems: "baseline", marginBottom: 15 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: 'black' }}>
                    Find
                </Text>           
            </View>

            {/* Kategori Makanan Horizontal */}
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

                                // Gaya Berdasarkan Pilihan
                                backgroundColor: isSelected ? COLORS.primary : "#f5f5f5", 
                                borderWidth: isSelected ? 0 : 1, // Tidak ada border jika terpilih
                                borderColor: '#e0e0e0',
                            }}
                            onPress={() => console.log(`Tapped ${category.name}`)}
                        >
                            {/* Teks Kategori */}
                            <Text style={{
                                fontSize: 16,
                                fontFamily: "roboto",
                                fontWeight: "bold",
                                color: isSelected ? "white" : "black", // Putih vs Hitam
                            }}>
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}