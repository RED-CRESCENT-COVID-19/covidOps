import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Styles } from "../../theme";

// plugins
import I18n from "../plugins/I18n";

// Writing style of the App
const WRITING_STYLE = I18n.locale;

const CalculationLabel = props => {
  const style =
    WRITING_STYLE === "ur"
      ? { writingDirection: Styles.rtlWritingStyle, alignSelf: "flex-end" }
      : {};
  return (
    <View style={[screenStyles.labelContainer, style]}>
      <Text style={screenStyles.primaryText}>{props.value}</Text>
      <Text style={screenStyles.secondaryText}>{props.secondaryText}</Text>
    </View>
  );
};

export default CalculationLabel;

const screenStyles = StyleSheet.create({
  primaryText: {
    color: Colors.primaryColor,
    paddingLeft: 35,
    fontSize: 30
    // writingDirection: "rtl"
  },
  secondaryText: {
    paddingTop: 8,
    paddingLeft: 20,
    fontWeight: "500",
    writingDirection: "rtl"
  },
  labelContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 20
  }
});
