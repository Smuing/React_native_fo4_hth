import * as React from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import colors from "../colors";

export default function Search({ s }) {
  const [abnormalChecked, setAbnormalChecked] = React.useState(false);

  return (
    <View
      style={[
        {
          paddingHorizontal: 12,
          alignItems: "center",
        },
        s.pb4,
      ]}
    >
      <TextInput placeholder="구단주명" style={[s.formControl, s.mb1]} />
      <Text style={[s.text, s.mb1]}>VS</Text>
      <TextInput placeholder="구단주명" style={[s.formControl, s.mb2]} />
      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <Checkbox
          style={{ borderWidth: 1 }}
          value={abnormalChecked}
          onValueChange={setAbnormalChecked}
          color={abnormalChecked ? colors.Primary : colors.Outline}
        />
        <TouchableOpacity onPress={() => setAbnormalChecked(!abnormalChecked)}>
          <Text style={[s.text, s.ml2]}>몰수승, 몰수패 포함</Text>
        </TouchableOpacity>
      </View>
      <TouchableHighlight
        onPress={() => {}}
        style={[s.btnTouchable, s.mt3, { width: "100%" }]}
      >
        <View style={[s.btn, s.btnPrimary]}>
          <Text style={[s.btnText, s.btnPrimaryText]}>검색</Text>
        </View>
      </TouchableHighlight>
      {/* <TouchableHighlight
        onPress={() => {}}
        style={[s.btnTouchable, s.mt2, { width: "100%" }]}
      >
        <View style={[s.btn, s.btnDanger]}>
          <Text style={[s.btnText, s.btnDangerText]}>취소</Text>
        </View>
      </TouchableHighlight> */}
    </View>
  );
}
