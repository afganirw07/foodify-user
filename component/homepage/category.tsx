import { COLORS } from "@/constants/colors";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Category() {
    const categories = [
        { name: "Burger", isSelected: true },
        { name: "Pizza", isSelected: false },
        { name: "Hotdog", isSelected: false },
        { name: "Fried Chicken", isSelected: false },
        { name: "Snack", isSelected: false },
    ];

    return (
        <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#fff' }}>

            <View style={{ flexDirection: "row", alignItems: "baseline", marginBottom: 15 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: 'black' }}>
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

                                backgroundColor: isSelected ? COLORS.primary : "rgba(201, 195, 195, 0.1)", 
                                borderWidth: isSelected ? 0 : 1, 
                                borderColor: '#transparent',
                            }}
                            onPress={() => console.log(`Tapped ${category.name}`)}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontFamily: "roboto",
                                fontWeight: "bold",
                                color: isSelected ? "white" : "black", 
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