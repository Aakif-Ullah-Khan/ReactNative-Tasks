import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "blue",
        },
        animation: "slide_from_bottom", // Animation when navigating forward
        animationTypeForReplace: "pop", // Animation when navigating back. Available animations: "pop", "push", "fade", "slide_from_right", "slide_from_left", "slide_from_bottom", "slide_from_top"
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="profile" options={{ headerShown: true }} />
      <Stack.Screen name="chat" options={{ headerShown: true }} />
    </Stack>
  );
}
