import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/ui/button";

type Props = {};

export default function Home({}: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-600">
        Página Inicial 🚀
      </Text>
      <Button></Button>
    </View>
  );
}
