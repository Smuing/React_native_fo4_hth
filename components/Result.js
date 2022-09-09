import * as React from "react";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import { dateFormat } from "../hooks";

export default function Result({ props }) {
  const { s, c, error, errorMs, nick, matchData } = props;

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
    dateText: {
      fontSize: 12,
    },
  };

  return (
    <View style={[s.container, s.flex1]}>
      {error ? (
        <View style={[s.alert, s.alertDanger]}>
          <Text style={[s.alertText, s.alertDangerText]}>{errorMs}</Text>
        </View>
      ) : (
        <>
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
                <View style={[s.flexRow, s.mb1]}>
                  <View style={[s.flex1, s.alignItemsStart]}>
                    <TouchableHighlight
                      onPress={() => {}}
                      style={[s.btnTouchable]}
                    >
                      <View style={[s.btn, s.btnPrimary]}>
                        <Text style={[s.btnText, s.btnPrimaryText]}>6</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={[s.flex1, s.alignItemsCenter]}>
                    <TouchableHighlight
                      onPress={() => {}}
                      style={[s.btnTouchable]}
                    >
                      <View style={[s.btn, s.btnSecondary]}>
                        <Text style={[s.btnText, s.btnSecondaryText]}>0</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={[s.flex1, s.alignItemsEnd]}>
                    <TouchableHighlight
                      onPress={() => {}}
                      style={[s.btnTouchable]}
                    >
                      <View style={[s.btn, s.btnDanger]}>
                        <Text style={[s.btnText, s.btnDangerText]}>4</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
                <View style={[s.flexRow, s.justifyContentBetween]}>
                  <View>
                    <Text style={[s.textSmall, s.textMuted]}>GALAHAD</Text>
                    <Text style={[s.textSmall, s.textMuted]}>40.0%</Text>
                  </View>
                  <View style={[s.alignItemsCenter]}>
                    <Text style={[s.textSmall, s.textMuted]}>무승부</Text>
                    <Text style={[s.textSmall, s.textMuted]}>0.0%</Text>
                  </View>
                  <View style={[s.alignItemsEnd]}>
                    <Text style={[s.textSmall, s.textMuted]}>런던토종닭</Text>
                    <Text style={[s.textSmall, s.textMuted]}>40.0%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[s.listGroup, s.flex1]}>
            {matchData.length === 0
              ? ""
              : matchData.map((match, i) => (
                  <TouchableHighlight
                    onPress={() => {}}
                    underlayColor="#e9ecef"
                    style={[
                      s.listGroupItem,
                      i == 0
                        ? s.listGroupItemFirstChild(true)
                        : i == matchData.length - 1
                        ? s.listGroupItemLastChild(true)
                        : {},
                    ]}
                    key={match.id}
                  >
                    <View>
                      <Text style={[custom.dateText, s.textMuted, s.mb1]}>
                        {dateFormat(new Date(match.date))}
                      </Text>
                      <View style={[s.flex1, s.flexRow]}>
                        <Text style={[s.text, s.flex1, s.textRight]}>
                          {nick[0]}
                        </Text>
                        <View style={[s.flex1]}>
                          <Text style={[s.h4, s.textCenter]}>
                            {match.firstGoal} - {match.secondGoal}
                          </Text>
                          {match.shootOut && (
                            <Text style={[s.textSmall, s.textCenter]}>
                              (Pen {match.firstShootOutGoal} -{" "}
                              {match.secondShootOutGoal})
                            </Text>
                          )}
                          {match.abnormalEnd && (
                            <Text style={[s.textSmall, s.textCenter]}>
                              몰수패
                            </Text>
                          )}
                        </View>
                        <Text style={[s.text, s.flex1, s.textLeft]}>
                          {nick[1]}
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                ))}
            <TouchableHighlight
              onPress={async () => {
                // const response = await fetch(
                //   `https://fo4-hth-api.herokuapp.com/matchids?first=나인범&second=galahad`,
                //   {
                //     headers: {
                //       Origin: "fo4hth://",
                //     },
                //   }
                // );
                // const json = await response.json();
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
                <Text style={[s.btnText, s.btnPrimaryText]}>더보기</Text>
              </View>
            </TouchableHighlight>
          </View>
        </>
      )}
    </View>
  );
}
