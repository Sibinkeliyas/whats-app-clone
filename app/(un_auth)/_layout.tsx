import useAuth from "@/hooks/useAuth";
import { Stack, router } from "expo-router";
import React, { ReactElement, useEffect } from "react";

const UnAuthLayout = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/(tabs)/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="signIn"
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="signUp"
          options={{ headerShown: false, headerBackVisible: false }}
        />
      </Stack>
    </>
  );
};

export default UnAuthLayout;
