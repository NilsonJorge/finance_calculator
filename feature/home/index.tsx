import React from "react";
import { View, Text, ScrollView } from "react-native";
import CreateInvestiment from "./create_investiment_modal";
import ListInvestment from "./list_investiment";
import { InvestmentProvider } from "./investiments_context";

export default function Home() {
  return (
    <View className="flex-1 justify-start items-center bg-gray-100">
      <View className="bg-green-900 w-full p-5">
        <Text className="text-2xl text-white">Calculadora Financeira</Text>
      </View>
      <View className="w-full pl-2 mt-2">
        <Text className="text-2xl font-bold ">Investimentos</Text>
      </View>
      <InvestmentProvider>
        <ScrollView className="flex-1 mt-5">
          <ListInvestment />
          <CreateInvestiment className="mt-5" />
        </ScrollView>
      </InvestmentProvider>
    </View>
  );
}
