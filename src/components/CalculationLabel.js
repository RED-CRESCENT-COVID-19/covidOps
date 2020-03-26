import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../theme";
const CalculationLabel = props => {
  return (
    <View style={screenStyles.labelContainer}>
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
  },
  secondaryText: {
    paddingTop: 8,
    paddingLeft: 20,
    fontWeight: "500"
  },
  labelContainer: {
    flexDirection: "row",
    paddingTop: 10
  }
});
