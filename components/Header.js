import * as React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../colors";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <TouchableOpacity
        style={{ width: 36 }}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Entypo name="menu" size={36} color={colors.Black} />
      </TouchableOpacity>
    </View>
  );
}
