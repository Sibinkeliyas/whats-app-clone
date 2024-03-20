import { Stack } from "expo-router";


function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="user/[userId]" />
    </Stack>
  );
}

export default AuthLayout;
