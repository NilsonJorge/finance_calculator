import { getAllInvestments } from "@/db/investiment";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useInvestments } from "./investiments_context";
import Investiment from "./investiment";

export default function ListInvestment() {
  const { investments, loading } = useInvestments();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={investments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Investiment name={item.name} total_value={item.total_value} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
}
