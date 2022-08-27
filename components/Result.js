import * as React from "react";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";

export default function Result({ s, c }) {
  const custom = {
    card: {
      flexDirection: "column",
      backgroundColor: c.CARD_BG,
      borderWidth: c.CARD_BORDER_WIDTH,
      borderColor: c.CARD_BORDER_COLOR,
      borderRadius: c.CARD_BORDER_RADIUS,
    },
    cardBody: {
      paddingHorizontal: c.CARD_SPACER_X,
      paddingVertical: c.CARD_SPACER_X, // former: CARD_SPACER_Y,
      color: c.CARD_COLOR,
    },
  };

  return (
    <View style={[{ paddingHorizontal: 12, flex: 1 }]}>
      <View style={[custom.card, s.mb3]}>
        <View style={[custom.cardBody]}>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              s.cardTitle,
            ]}
          >
            <Text style={[s.text]}>GALAHAD</Text>
            <Text style={[s.textSmall, s.textMuted]}>총 10경기</Text>
            <Text style={[s.text]}>런던토종닭</Text>
          </View>
          <View style={[s.progress, s.mb2, { flexDirection: "row" }]}>
            <View style={[s.progressBar, { flex: 60.0 }]} />
            <View style={[s.progressBar, s.bgDanger, { flex: 40.0 }]} />
          </View>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableHighlight
                onPress={() => {}}
                style={[s.btnTouchable, { width: 38 }]}
              >
                <View style={[s.btn, s.btnPrimary]}>
                  <Text style={[s.btnText, s.btnPrimaryText]}>6</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {}}
                style={[s.btnTouchable, { width: 38 }]}
              >
                <View style={[s.btn, s.btnSecondary]}>
                  <Text style={[s.btnText, s.btnSecondaryText]}>0</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {}}
                style={[s.btnTouchable, { width: 38 }]}
              >
                <View style={[s.btn, s.btnDanger]}>
                  <Text style={[s.btnText, s.btnDangerText]}>4</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text>GALAHAD</Text>
                <Text>40.0%</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text>무승부</Text>
                <Text>0.0%</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text>런던토종닭</Text>
                <Text>40.0%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[s.listGroup, { flex: 1 }]}>
        <ScrollView style={{ flex: 1 }}>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="#e9ecef"
            style={[s.listGroupItem, s.listGroupItemFirstChild(true)]}
          >
            <View>
              <Text>2022</Text>
              <View>
                <Text>닉넴</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="#e9ecef"
            style={[s.listGroupItem]}
          >
            <View>
              <Text>2022</Text>
              <View>
                <Text>닉넴</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="#e9ecef"
            style={[s.listGroupItem, s.listGroupItemLastChild(true)]}
          >
            <View>
              <Text>2022</Text>
              <View>
                <Text>닉넴</Text>
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </View>
  );
}
