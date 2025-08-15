import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "../global.css"; // importa estilos do NativeWind
import { ToastProvider } from "@gluestack-ui/toast";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <ToastProvider>
        <View className="flex-1 bg-white">
          <StatusBar style="auto" />
          <Stack
            screenOptions={{
              headerShown: false,
              headerTintColor: "#fff", // cor do texto
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
        </View>
      </ToastProvider>
    </GluestackUIProvider>
  );
}
