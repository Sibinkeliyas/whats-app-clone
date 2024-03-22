import CameraCom from "@/components/camera";
import ChatHeader from "@/components/headerComponents/chatHeader";
import HeaderFlash from "@/components/headerComponents/headerFlash";
import { tintColorDark, tintColorLight } from "@/constants/Colors";
import { JWTProvider } from "@/context/JWTContext";
import { ThemeProvider as ThemeProviderContext } from "@/context/ThemeContext";
import useTheme from "@/hooks/useTheme";
import { store } from "@/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Provider } from "react-redux";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider store={store}>
      <ThemeProviderContext>
        <JWTProvider>
          <>
            <StatusBar
              style="dark"
              backgroundColor="transparent"
              translucent={true}
            />
            <Stack
              screenOptions={{
                statusBarColor: "light",
              }}
            >
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(un_auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="camera"
                options={{
                  headerBackTitleVisible: false,
                  headerRight: () => {
                    return <HeaderFlash />;
                  },
                  headerTitle: "",
                  headerTransparent: true,
                  headerTintColor: "#FFF",
                }}
              />
              <Stack.Screen
                name="capturedimage"
                options={{
                  headerBackTitleVisible: false,
                  headerTitle: "",
                  headerTransparent: true,
                  headerTintColor: "#FFF",
                }}
              />
              <Stack.Screen
                name="(auth)"
                options={{
                  headerBackTitleVisible: false,
                  headerTitle(props) {
                    return <ChatHeader />;
                  },
                  headerTintColor: tintColorLight,
                }}
              />
              <Stack.Screen
                name="newChat"
                options={{ presentation: "modal", headerTitle: "New Chat" }}
              />
            </Stack>
          </>
        </JWTProvider>
      </ThemeProviderContext>
    </Provider>
  );
}
