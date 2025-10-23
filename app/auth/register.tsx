import React, { useState } from "react";
import { navigate } from "expo-router/build/global-state/routing";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";

import { Eye, EyeOff } from "lucide-react-native";

const { width } = Dimensions.get("window");

import { COLORS } from "../../constants/colors";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  s;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const switchLogin = () => {
    navigate("/auth/login");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 25,
        paddingTop: Platform.OS === "ios" ? 100 : 80,
      }}
    >
      {/* Register Section */}
      <View style={{ marginBottom: 40, marginTop: 30 }}>
        <Text
          style={{
            fontSize: 33,
            fontWeight: "700",
            color: COLORS.darkText,
            marginBottom: 5,
          }}
        >
          Create An Account
        </Text>
      </View>

      {/* Form Section */}
      <View style={{ width: "100%", marginBottom: 20 }}>
        {/* Name Field */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: COLORS.darkText,
              marginBottom: 8,
            }}
          >
            Name
          </Text>
          <TextInput
            style={{
              height: 50,
              borderColor: COLORS.inputBorder,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 15,
              fontSize: 16,
              color: COLORS.darkText,
            }}
            value={name}
            onChangeText={setName}
            placeholder="John Doe"
            placeholderTextColor="#aaa"
            keyboardType="default"
            autoCapitalize="words"
          />
        </View>
        {/* Email Field */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: COLORS.darkText,
              marginBottom: 8,
            }}
          >
            Email Address
          </Text>
          <TextInput
            style={{
              height: 50,
              borderColor: COLORS.inputBorder,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 15,
              fontSize: 16,
              color: COLORS.darkText,
            }}
            value={email}
            onChangeText={setEmail}
            placeholder="hello@example.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Field */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: COLORS.darkText,
              }}
            >
              Password
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50,
              borderColor: COLORS.inputBorder,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 15,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 16,
                color: COLORS.darkText,
              }}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="••••••••••••••"
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 13, color: COLORS.darkText }}>
            Keep going if you’re okay with our{" "}
            <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
              Terms of Service
            </Text>
          </Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
            width: "100%",
            marginBottom: 20,
          }}
          onPress={() => console.log("Login clicked")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>

      {/* Separator */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: 30,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#eee" }} />
        <Text style={{ marginHorizontal: 10, fontSize: 14, color: "#777" }}>
          or Register with
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#eee" }} />
      </View>

      {/* Google Button */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.lightGray,
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: COLORS.mediumGray,
          width: "100%",
          marginBottom: 30,
        }}
        onPress={() => console.log("Google clicked")}
      >
        <Image
          source={require("../../assets/logo/google.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text
          style={{
            fontSize: 16,
            color: COLORS.darkText,
            fontWeight: "600",
          }}
        >
          Continue with Google
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text
          style={{ fontSize: 16, color: COLORS.darkText, fontWeight: "600" }}
        >
          Already have an account?
        </Text>
        <TouchableOpacity onPress={switchLogin}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: COLORS.primary,
              marginLeft: 6,
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
