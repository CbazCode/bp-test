import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Header from "components/global/Header/Header";
import Toast from "components/global/Toast/Toast";

export { ErrorBoundary } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Toast />
          <Stack>
            <Stack.Screen name="index" options={{ header: () => <Header /> }} />
            <Stack.Screen
              name="product/[id]"
              options={{ header: () => <Header showGoBack /> }}
            />
            <Stack.Screen
              name="create/index"
              options={{ header: () => <Header showGoBack /> }}
            />
            <Stack.Screen
              name="edit/index"
              options={{ header: () => <Header showGoBack /> }}
            />
          </Stack>
        </QueryClientProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
