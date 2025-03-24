import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
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
          headerTintColor: "white", // ✅ This changes the back arrow color
          animation: "slide_from_right", // Animation when navigating forward
          animationTypeForReplace: "pop", // Animation when navigating back. Available animations: "pop", "push", "fade", "slide_from_right", "slide_from_left", "slide_from_bottom", "slide_from_top"
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="chat" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
