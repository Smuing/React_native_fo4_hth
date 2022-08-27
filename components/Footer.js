import * as React from "react";
import { Text, View } from "react-native";

export default function Footer({ s }) {
  return (
    <View style={[s.flex1, s.alignItemsCenter, s.justifyContentCenter]}>
      <Text>Data based on NEXON DEVELOPERS</Text>
    </View>
  );
}
