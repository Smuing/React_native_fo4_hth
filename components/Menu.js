import * as React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import Footer from "./Footer";

export default function Menu({ s }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[s.container, s.flex1]}>
      <View
        style={[s.flexRow, s.alignItemsCenter, s.justifyContentBetween, s.mb2]}
      >
        <Text style={[s.text, s.fontWeightBold]}>최근 검색 유저</Text>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <Ionicons name="close" size={34} color={colors.Black} />
        </TouchableOpacity>
      </View>
      <View style={[s.listGroup]}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <View
            style={[
              s.listGroupItem,
              s.listGroupItemFirstChild(true),
              s.listGroupItemLastChild(true),
              s.alignItemsCenter,
              s.flexRow,
              s.justifyContentCenter,
            ]}
          >
            <Text style={[s.listGroupItemText, s.text]}>GALAHAD</Text>
            <Text style={[s.listGroupItemText, s.text]}> VS </Text>
            <Text style={[s.listGroupItemText, s.text]}>런던토종닭</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
