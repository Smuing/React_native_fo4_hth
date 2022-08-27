import * as React from "react";
import { Image, Text, View } from "react-native";
import colors from "../colors";

export default function Intro({ s }) {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={[s.alert, s.alertWarning]}>
        <Text style={[s.alertText, s.alertWarningText]}>
          서버 요청 시간제한으로 최근 200경기 중에서 같이 한 경기가 검색됩니다.
        </Text>
      </View>
      <Image
        style={{ width: 232, height: 232 }}
        source={require("../assets/icon.png")}
      />
    </View>
  );
}
