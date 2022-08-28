import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputAccessoryView, Platform, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import BootstrapStyleSheet from "react-native-bootstrap-styles";
import colors from "./colors";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import KeyboardNavigation from "./components/KeyboardNavigation";
import TopButton from "./components/TopButton";

const constants = {
  REM: 16,
  BODY_COLOR: colors.Black,
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
  const scrollView = React.useRef();
  const [scrollY, setScrollY] = React.useState(0);

  const firstInputRef = React.useRef();
  const secondInputRef = React.useRef();
  const [focus, setFocus] = React.useState(true);
  const [abnormalChecked, setAbnormalChecked] = React.useState(false);

  function search() {}

  return (
    <SafeAreaView style={[s.flex1, { backgroundColor: colors.White }]}>
      <View style={{ flex: 9.5 }}>
        <Header />
        <ScrollView
          ref={scrollView}
          scrollEventThrottle={1}
          onScroll={(e) => {
            setScrollY(e.nativeEvent.contentOffset.y);
          }}
        >
          <Search
            props={{
              s,
              firstInputRef,
              secondInputRef,
              setFocus,
              abnormalChecked,
              setAbnormalChecked,
            }}
          />
          {/* <Intro s={s} /> */}
          <Result s={s} c={c} />
        </ScrollView>
        {Platform.OS === "ios" && (
          <InputAccessoryView nativeID="UpDownDone">
            <KeyboardNavigation
              props={{ s, firstInputRef, secondInputRef, focus }}
            />
          </InputAccessoryView>
        )}
        {scrollY >= 400 && <TopButton props={{ s, scrollView }} />}
      </View>
      <View style={{ flex: 0.5 }}>
        <Footer s={s} />
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
