import { createClient } from "@supabase/supabase-js";
import { Stack, router } from "expo-router";
import React, { useEffect } from "react";

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
);

export default function RootLayout() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        const user = session.user;

        // Insert data tabel users
        const { data: existingUser, error: selectError } = await supabase
          .from("users")
          .select("id")
          .eq("id", user.id)
          .single();
      } else if (event === "SIGNED_OUT") {
        router.replace("/homepage/page");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
