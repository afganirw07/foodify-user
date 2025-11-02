import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Search } from "lucide-react-native";

export default function SearchFood({
  onSearchChange,
}: {
  onSearchChange: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = () => {
    onSearchChange(searchQuery.trim());
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "transparent",
        backgroundColor: "rgba(201, 195, 195, 0.1)",
        borderRadius: 10,
        paddingHorizontal: 10,
      }}
    >
      <TextInput
        placeholder="Search your food"
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          onSearchChange(text);
        }}
        onSubmitEditing={handleSearch} 
        style={{
          flex: 1,
          paddingVertical: 10,
          fontSize: 17,
          color: "black",
          backgroundColor: "transparent",
        }}
      />

      <TouchableOpacity onPress={handleSearch}>
        <Search size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
