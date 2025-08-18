import { useSearchParams } from "expo-router/build/hooks";
import React from "react";
import { View } from "react-native";
import { ItemProvider } from "./items_context";

export default function InvestimentRenderer() {
  const params = useSearchParams();
  const investimentId = params.get("investiment");
  return (
    <ItemProvider id={Number(investimentId)}>
      <View></View>
    </ItemProvider>
  );
}
