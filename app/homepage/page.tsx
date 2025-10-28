import LocationRestaurant from "@/component/homepage/location";
import Sidebar from "@/component/homepage/sidebar";
import Slogan from "@/component/homepage/slogan";
import SearchFood from "@/component/homepage/search";
import Filter from "@/component/homepage/filter";
import Category from "@/component/homepage/category";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homepage() {

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 20, marginTopx: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
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
      <View style={{ marginTop: 20 }}>
        <Category />
      </View> 
    </SafeAreaView>
  )
}