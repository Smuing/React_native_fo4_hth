import * as React from "react";
import {
  Dimensions,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../colors";

export default function KeyboardNavigation({ props }) {
  const { s, firstInputRef, secondInputRef, focus } = props;
  return (
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
          style={[
            s.text,
            s.fw500,
            {
              color: colors.Primary,
            },
          ]}
        >
          완료
        </Text>
      </TouchableOpacity>
    </View>
  );
}
