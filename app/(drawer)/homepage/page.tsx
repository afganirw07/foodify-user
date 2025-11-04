import Category from "@/component/homepage/category";
import Filter from "@/component/homepage/filter";
import LocationRestaurant from "@/component/homepage/location";
import MenuRestaurant from "@/component/homepage/menu";
import SearchFood from "@/component/homepage/search";
import Sidebar from "@/component/homepage/sidebar";
import Slogan from "@/component/homepage/slogan";
import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
);

export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={[
          { type: "header", id: "header" },
          { type: "category", id: "category" },
          { type: "menu", id: "menu" },
        ]}
        renderItem={({ item }) => {
          if (item.type === "header") {
            return (
              <>
                <View
                  style={{
                    paddingHorizontal: 20,
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <LocationRestaurant />
                  <Sidebar />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                  <Slogan />
                </View>
                <View
                  style={{
                    paddingHorizontal: 20,
                    marginTop: 20,
                    paddingBottom: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <SearchFood onSearchChange={(text) => setSearchQuery(text)} />
                  </View>
                  <Filter />
                </View>
              </>
            );
          }

          if (item.type === "category") {
            return (
              <Category
                onCategorySelect={(category) => setSelectedCategory(category)}
              />
            );
          }

          if (item.type === "menu") {
            return <MenuRestaurant selectedCategory={selectedCategory} searchQuery={searchQuery} />;
          }

        }}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
