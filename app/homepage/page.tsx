import Category from "@/component/homepage/category";
import Filter from "@/component/homepage/filter";
import LocationRestaurant from "@/component/homepage/location";
import MenuRestaurant from "@/component/homepage/menu";
import SearchFood from "@/component/homepage/search";
import Sidebar from "@/component/homepage/sidebar";
import Slogan from "@/component/homepage/slogan";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
);

export default function Homepage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ paddingHorizontal: 20, marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <LocationRestaurant />
              <Sidebar />
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
              <Slogan />
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View style={{ width: "80%" }}>
                <SearchFood />
              </View>
              <Filter />
            </View>
            <View style={{ marginTop: 5 }}>
              <Category />
            </View>
          </>
        }
        ListFooterComponent={<MenuRestaurant />}
        showsVerticalScrollIndicator={false}
        data={[]} 
        renderItem={null}
      />
    </SafeAreaView>
  );
}