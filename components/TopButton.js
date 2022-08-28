import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../colors";

export default function TopButton({ props }) {
  const { s, scrollView } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        scrollView.current.scrollTo({ y: 0, animated: true });
      }}
      style={[
        s.alignItemsCenter,
        s.justifyContentCenter,
        {
          width: 40,
          height: 40,
          position: "absolute",
          right: 12,
          bottom: 0,
          borderWidth: 2,
          borderColor: colors.Primary,
          borderRadius: 5,
        },
      ]}
    >
      <Entypo name="chevron-thin-up" size={24} color={colors.Primary} />
    </TouchableOpacity>
  );
}
