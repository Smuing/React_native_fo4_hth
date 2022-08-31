import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  InputAccessoryView,
  Platform,
  ScrollView,
  View,
} from "react-native";
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

const API_URL = "https://fo4-hth-api.herokuapp.com";

function HomeScreen() {
  const scrollView = React.useRef();
  const [scrollY, setScrollY] = React.useState(0);

  const firstInputRef = React.useRef();
  const secondInputRef = React.useRef();
  const [focus, setFocus] = React.useState(true);
  const [abnormalChecked, setAbnormalChecked] = React.useState(false);

  const [doSearch, setDoSearch] = React.useState(false);
  const [searching, setSearching] = React.useState(false);
  const [canceling, setCanceling] = React.useState(false);
  const abortController = React.useRef(null);
  const [error, setError] = React.useState(false);
  const [errorMs, setErrorMs] = React.useState("");
  const [firstNick, setFirstNick] = React.useState("");
  const [secondNick, setSecondNick] = React.useState("");
  const [resFirstNick, setResFirstNick] = React.useState("");
  const [resSecondNick, setResSecondNick] = React.useState("");
  const [offset, setOffset] = React.useState(0);
  const [accessIds, setAccessIds] = React.useState([]);
  const [matchIds, setMatchIds] = React.useState([]);
  const [totalData, setTotalData] = React.useState({});
  async function search() {
    if (
      firstNick.replace(/(\s*)/g, "") === "" ||
      secondNick.replace(/(\s*)/g, "") === ""
    ) {
      Alert.alert("알림", "구단주명을 모두 입력해 주세요.", [{ text: "확인" }]);
    } else if (firstNick === secondNick) {
      Alert.alert("알림", "서로 다른 구단주명을 입력해 주세요.", [
        { text: "확인" },
      ]);
    } else {
      setDoSearch(true);
      setSearching(true);
      setCanceling(false);
      setError(false);
      setResFirstNick("");
      setResSecondNick("");
      setAccessIds([]);
      setMatchIds([]);
      console.log(matchIds, accessIds);
      abortController.current = new AbortController();

      const response = await fetch(
        `${API_URL}/matchids?first=${firstNick}&second=${secondNick}`,
        {
          method: "GET",
          signal: abortController.current.signal,
          headers: {
            Origin: "fo4hth://",
          },
        }
      )
        .then((res) => res.json())
        .catch((error) => {
          if (error.message != "The user aborted a request.") {
            setError(true);
            setErrorMs("검색 시간이 초과되었습니다.");
          }
        });
      if (response.message == "First user could not found") {
        setError(true);
        setErrorMs("첫 번째 구단주를 찾을 수 없습니다.");
      } else if (response.message == "Second user could not found") {
        setError(true);
        setErrorMs("두 번째 구단주를 찾을 수 없습니다.");
      } else if (response.message == "No matches user0") {
        setError(true);
        setErrorMs(
          `${response.userInfo.nickname[0]}님의 경기를 찾을 수 없습니다.`
        );
      } else if (response.message == "No matches user1") {
        setError(true);
        setErrorMs(
          `${response.userInfo.nickname[1]}님의 경기를 찾을 수 없습니다.`
        );
      } else if (response.message == "No last matches") {
        setError(true);
        setErrorMs("경기를 찾을 수 없습니다.");
      } else {
        if (response !== undefined) {
          setResFirstNick(response.userInfo.nickname[0]);
          setResSecondNick(response.userInfo.nickname[1]);
          setAccessIds([...response.userInfo.accessIds]);
          setMatchIds(
            [...response.matchIds].filter((e, i, a) => a.indexOf(e) !== i)
          );
          console.log(secondNick, matchIds);
        }
      }
      if (matchIds.length !== 0) {
        abortController.current = new AbortController();
        setMatchIds([...matchIds].slice(offset));

        const result = await fetch(
          `${API_URL}/matchdetail?accessIds=${accessIds}&matchIds=${matchIds}&abnormalGame=${abnormalChecked}`,
          {
            method: "GET",
            signal: abortController.current.signal,
            headers: {
              Origin: "fo4hth://",
            },
          }
        )
          .then((res) => res.json())
          .catch((error) => {
            if (error.message != "The user aborted a request.") {
              setError(true);
              setErrorMs("검색 시간이 초과되었습니다.");
            }
          });
        if (result.message == "No last matches") {
          setError(true);
          setErrorMs("같이 플레이한 경기를 찾을 수 없습니다.");
        } else {
          console.log(result);
          setOffset(result.offset + 1);
        }
      } else {
        setError(true);
        setErrorMs("같이 플레이한 경기를 찾을 수 없습니다.");
      }
      apiFinish();
    }
  }
  function cancel() {
    setCanceling(true);
    abortController.current && abortController.current.abort();
    setSearching(false);
  }
  function apiFinish() {
    setSearching(false);
  }

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
              firstNick,
              setFirstNick,
              secondNick,
              setSecondNick,
              firstInputRef,
              secondInputRef,
              setFocus,
              abnormalChecked,
              setAbnormalChecked,
              search,
              searching,
              cancel,
              canceling,
            }}
          />
          {doSearch ? (
            <Result props={{ s, c, error, errorMs }} />
          ) : (
            <Intro s={s} />
          )}
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
