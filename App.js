import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BootstrapStyleSheet from "react-native-bootstrap-styles";
import colors from "./colors";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import Intro from "./components/Intro";
import { View } from "react-native";
import Footer from "./components/Footer";

const constants = {
  REM: 16,
  INPUT_BORDER_WIDTH: 1,
  INPUT_BORDER_COLOR: colors.Outline,
  CARD_BORDER_WIDTH: 1,
  CARD_BORDER_RADIUS: 5,
  LIST_GROUP_BORDER_WIDTH: 1,
  LIST_GROUP_BORDER_RADIUS: 5,
};
const bootstrapStyleSheet = new BootstrapStyleSheet(constants);
const { s, c } = bootstrapStyleSheet;

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.White }}>
      <View style={{ flex: 9.5 }}>
        <Header />
        <Search s={s} />
        <Result s={s} c={c} />
        {/* <Intro s={s} /> */}
      </View>
      <View style={{ flex: 0.5 }}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={() => <Menu s={s} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
