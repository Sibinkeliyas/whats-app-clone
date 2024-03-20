import { Stack, router } from "expo-router";
import React from "react";

const UnAuthLayout = () => {

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
