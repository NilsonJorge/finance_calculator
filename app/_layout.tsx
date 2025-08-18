import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "../global.css"; // importa estilos do NativeWind
import { ToastProvider } from "@gluestack-ui/toast";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useEffect } from "react";
import { initDB } from "@/db/initDB";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  useEffect(() => {
    initDB().then(() => {
      console.log("Banco inicializado!");
    });
  }, []);
  return (
    <GluestackUIProvider>
      <ToastProvider>
        <View className="flex-1 bg-white">
          <StatusBar style="auto" />
          <SafeAreaView className="flex-1 ">
            <Stack
              screenOptions={{
                headerShown: false,
                headerTintColor: "#fff", // cor do texto
                headerTitleStyle: { fontWeight: "bold" },
              }}
            />
          </SafeAreaView>
        </View>
      </ToastProvider>
    </GluestackUIProvider>
  );
}
