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
    <SafeAreaView style={[s.container, { flex: 1 }]}>
      <View
        style={{
          flex: 9.5,
        }}
      >
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
            s.mb2,
          ]}
        >
          <Text style={{ color: "black" }}>최근 검색 유저</Text>
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
                { alignItems: "center" },
              ]}
            >
              <Text style={[s.listGroupItemText]}>GALAHAD VS 런던토종닭</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}
