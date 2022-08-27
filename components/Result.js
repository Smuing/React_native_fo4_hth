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
    <View style={[s.flex1, { paddingHorizontal: 12 }]}>
      <View style={[custom.card, s.mb3]}>
        <View style={[custom.cardBody]}>
          <View
            style={[
              s.cardTitle,
              s.flexRow,
              s.alignItemsCenter,
              s.justifyContentBetween,
            ]}
          >
            <Text style={[s.text]}>GALAHAD</Text>
            <Text style={[s.textSmall, s.textMuted]}>총 10경기</Text>
            <Text style={[s.text]}>런던토종닭</Text>
          </View>
          <View style={[s.progress, s.flexRow, s.mb2]}>
            <View style={[s.progressBar, { flex: 60.0 }]} />
            <View style={[s.progressBar, s.bgDanger, { flex: 40.0 }]} />
          </View>
          <View>
            <View style={[s.flexRow, s.justifyContentBetween]}>
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
            <View style={[s.flexRow, s.justifyContentBetween]}>
              <View>
                <Text>GALAHAD</Text>
                <Text>40.0%</Text>
              </View>
              <View style={[s.alignItemsCenter]}>
                <Text>무승부</Text>
                <Text>0.0%</Text>
              </View>
              <View style={[s.alignItemsEnd]}>
                <Text>런던토종닭</Text>
                <Text>40.0%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[s.listGroup, s.flex1]}>
        <ScrollView style={[s.flex1]}>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="#e9ecef"
            style={[s.listGroupItem, s.listGroupItemFirstChild(true)]}
          >
            <View>
              <Text style={[s.mb1, { fontSize: 12 }]}>
                2022년 08월 27일 00:07
              </Text>
              <View style={[s.flex1, s.flexRow]}>
                <Text style={[s.flex1, s.textRight]}>GALAHAD</Text>
                <Text style={[s.flex1, s.textCenter]}>1 - 0</Text>
                <Text style={[s.flex1, s.textLeft]}>런던토종닭</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="#e9ecef"
            style={[s.listGroupItem]}
          >
            <View>
              <Text style={[s.mb1, { fontSize: 12 }]}>
                2022년 08월 27일 00:07
              </Text>
              <View style={[s.flex1, s.flexRow]}>
                <Text style={[s.flex1, s.textRight]}>GALAHAD</Text>
                <Text style={[s.flex1, s.textCenter]}>1 - 0</Text>
                <Text style={[s.flex1, s.textLeft]}>런던토종닭</Text>
              </View>
              <Text style={[s.textCenter]}>(Pen 3 - 4)</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            underlayColor="#e9ecef"
            style={[s.listGroupItem, s.listGroupItemLastChild(true)]}
          >
            <View>
              <Text style={[s.mb1, { fontSize: 12 }]}>
                2022년 08월 27일 00:07
              </Text>
              <View style={[s.flex1, s.flexRow]}>
                <Text style={[s.flex1, s.textRight]}>GALAHAD</Text>
                <Text style={[s.flex1, s.textCenter]}>1 - 0</Text>
                <Text style={[s.flex1, s.textLeft]}>런던토종닭</Text>
              </View>
              <Text style={[s.textCenter]}>몰수패</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </View>
  );
}
