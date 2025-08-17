import React from "react";
import { View, Text } from "react-native";
import CreateInvestiment from "./create_investiment_modal";

type Props = {};

export default function Home({}: Props) {
  return (
    <View className="flex-1 justify-start items-center bg-gray-100">
      <View className="bg-green-900 w-full p-5">
        <Text className="text-2xl text-white">Calculadora Financeira</Text>
      </View>
      <View className="w-full pl-2 mt-2">
        <Text className="text-2xl font-bold ">Investimentos</Text>
      </View>
      <CreateInvestiment className="mt-5" />
    </View>
  );
}
