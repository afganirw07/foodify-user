import { useEffect } from "react";
import { Button, View, Image, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { createClient } from "@supabase/supabase-js";
import { COLORS } from "@/constants/colors";

WebBrowser.maybeCompleteAuthSession();

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
);

const SignInWithGoogle = () => {
  const redirectTo = AuthSession.makeRedirectUri({
    scheme: "foodifyuser", 
  });

  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo, 
        skipBrowserRedirect: true,
      },
    });

    if (error) {
      console.error("Error with Google sign-in:", error.message);
    } else {
      const res = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
      if (res.type === "success") {
        // get the code from the URL
        const url = res.url;
        const { data: sessionData, error: sessionError } =
          await supabase.auth.exchangeCodeForSession(url);
        if (sessionError) console.error(sessionError);
        else console.log("Login success:", sessionData);
        supabase.from("users")
      }
    }
  };

  return (
    <View>
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
        onPress={handleGoogleSignIn}
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
    </View>
  );
};

export { SignInWithGoogle };
