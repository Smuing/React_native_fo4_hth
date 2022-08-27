import * as React from "react";
import {
  ActivityIndicator,
  Dimensions,
  InputAccessoryView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Entypo } from "@expo/vector-icons";
import colors from "../colors";

export default function Search({ s }) {
  const firstInputRef = React.useRef();
  const secondInputRef = React.useRef();
  const [focus, setFocus] = React.useState(true);
  const [abnormalChecked, setAbnormalChecked] = React.useState(false);

  return (
    <View
      style={[
        s.alignItemsCenter,
        s.pb4,
        {
          paddingHorizontal: 12,
        },
      ]}
    >
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
      {Platform.OS === "ios" && (
        <InputAccessoryView nativeID="UpDownDone">
          <View
            style={[
              s.flexRow,
              s.justifyContentBetween,
              s.alignItemsCenter,
              {
                width: Dimensions.get("window").width,
                height: 44,
                backgroundColor: "#F8F8F8",
                borderTopWidth: 0.3,
                borderColor: "#adadad",
                paddingHorizontal: 16,
              },
            ]}
          >
            <View style={[s.flexRow]}>
              <TouchableOpacity
                onPress={() => {
                  firstInputRef.current.focus();
                }}
                style={{ marginRight: 14 }}
                disabled={focus}
              >
                <Entypo
                  name="chevron-thin-up"
                  size={24}
                  color={focus ? "#bfbfbf" : colors.Primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  secondInputRef.current.focus();
                }}
                disabled={!focus}
              >
                <Entypo
                  name="chevron-thin-down"
                  size={24}
                  color={focus ? colors.Primary : "#bfbfbf"}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: colors.Primary,
                }}
              >
                완료
              </Text>
            </TouchableOpacity>
          </View>
        </InputAccessoryView>
      )}

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
        onPress={() => {}}
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
