import React, { useState } from "react";

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
import { navigate } from "expo-router/build/global-state/routing";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const switchRegister = () => {
    navigate("/auth/register");
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
      {/* Login Section */}
      <View style={{ marginBottom: 40, marginTop: 60 }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "700",
            color: COLORS.darkText,
            marginBottom: 5,
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.mutedText,
          }}
        >
          Welcome back to the app
        </Text>
      </View>

      {/* Form Section */}
      <View style={{ width: "100%", marginBottom: 20 }}>
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
            <TouchableOpacity
              onPress={() => console.log("Forgot Password clicked")}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.primary,
                  fontWeight: "600",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
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

        {/* Keep Me Signed In Checkbox */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: keepSignedIn ? COLORS.primary : COLORS.inputBorder,
              borderRadius: 4,
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: keepSignedIn ? COLORS.primary : "#fff",
            }}
            onPress={() => setKeepSignedIn(!keepSignedIn)}
          >
            {keepSignedIn && (
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
                ✓
              </Text>
            )}
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: COLORS.darkText }}>
            Keep me signed in
          </Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 15,
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
            Login
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
          or sign in with
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

      {/* Create Account Link */}
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text
          style={{ fontSize: 16, color: COLORS.darkText, fontWeight: "600" }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={switchRegister}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: COLORS.primary,
              marginLeft: 6,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
