import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";

type Props = {
  id?: number;
  name?: string;
  total_value?: number;
};

export default function Investiment({ id, name, total_value }: Props) {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/${id}`); // rota dinâmica para a tela do investimento
  };
  return (
    <Pressable onPress={handlePress}>
      <View className="flex flex-col p-3 w-full rounded-lg border border-gray-400">
        <Text className="font-bold text-lg">{name}</Text>
        <Text>R$ {total_value}</Text>
      </View>
    </Pressable>
  );
}
