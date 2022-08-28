import * as React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import colors from "../colors";

export default function Search({ props }) {
  const {
    s,
    firstInputRef,
    secondInputRef,
    setFocus,
    abnormalChecked,
    setAbnormalChecked,
  } = props;
  return (
    <View style={[s.container, s.alignItemsCenter, s.pb4]}>
      <TextInput
        placeholder="구단주명"
        style={[s.formControl, s.mb1]}
        ref={firstInputRef}
        inputAccessoryViewID="UpDownDone"
        onFocus={() => {
          setFocus(true);
        }}
      />
      <Text style={[s.text, s.mb1]}>VS</Text>
      <TextInput
        placeholder="구단주명"
        style={[s.formControl, s.mb2]}
        ref={secondInputRef}
        inputAccessoryViewID="UpDownDone"
        onFocus={() => {
          setFocus(false);
        }}
      />

      <View style={[s.w100, s.flexRow, s.alignItemsCenter]}>
        <Checkbox
          style={{ borderWidth: 1, borderRadius: 4.8 }}
          value={abnormalChecked}
          onValueChange={setAbnormalChecked}
          color={abnormalChecked ? colors.Primary : colors.Outline}
        />
        <TouchableOpacity onPress={() => setAbnormalChecked(!abnormalChecked)}>
          <Text style={[s.text, s.ml2]}>몰수승, 몰수패 포함</Text>
        </TouchableOpacity>
      </View>
      <TouchableHighlight
        onPress={async () => {
          const response = await fetch(
            `https://fo4-hth-api.herokuapp.com/matchids?first=나인범&second=galahad`,
            {
              headers: {
                Origin: "fo4hth://",
              },
            }
          );
          const json = await response.json();
        }}
        style={[s.btnTouchable, s.w100, s.mt3]}
      >
        <View
          style={[
            s.btn,
            s.btnPrimary,
            s.flexRow,
            s.justifyContentCenter,
            s.alignItemsCenter,
          ]}
        >
          {/* <ActivityIndicator color={colors.White} style={{ marginRight: 4 }} /> */}
          <Text style={[s.btnText, s.btnPrimaryText]}>검색</Text>
        </View>
      </TouchableHighlight>
      {/* <TouchableHighlight
        onPress={() => {}}
        style={[s.btnTouchable, s.w100, s.mt2]}
      >
        <View style={[s.btn, s.btnDanger]}>
          <Text style={[s.btnText, s.btnDangerText]}>취소</Text>
        </View>
      </TouchableHighlight> */}
    </View>
  );
}
