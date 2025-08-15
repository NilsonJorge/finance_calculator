import React from "react";
import { Pressable, Text } from "react-native";

type Props = {};

export default function Button({}: Props) {
  return (
    <Pressable className="bg-blue-500 p-3 rounded">
      <Text>Button</Text>
    </Pressable>
  );
}
