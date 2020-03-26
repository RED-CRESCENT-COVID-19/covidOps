import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import {
  CardView,
  ExtendedButton,
  Heading,
  CalculationLabel
} from "../../components";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class HealthScan extends Component {
  handleAddHouseHold = () => {
    this.props.navigation.navigate("HouseholdNumber");
  };
  handleHouseHoldHistory = () => {
    this.props.navigation.navigate("HouseholdHistory");
  };
  render() {
    const homeIcon = require("../../../assets/images/home.png");
    const historyIcon = require("../../../assets/images/history.png");
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.HEALTHSCAN} />
        <Text style={Styles.topParagraph}>
          {I18n.t(`Paragarphs.HEALTHSCAN`)}
          {/* {Strings.Paragarphs.HEALTHSCAN} */}
        </Text>
        <CardView Styles={Styles.Spacer50} />
        <View style={Styles.largebuttonsContainer}>
          <ExtendedButton
            IconSource={homeIcon}
            title={Strings.ButtonTitles.ADDHOUSEHOLD}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            style={Styles.largeButton}
            shadeBorderRadius={1.5}
            onPress={this.handleAddHouseHold}
          />
        </View>
        <View style={Styles.largebuttonsContainer}>
          <ExtendedButton
            IconSource={historyIcon}
            title={Strings.ButtonTitles.HOUSEHOLDHISTORY}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.largeButton}
            onPress={this.handleHouseHoldHistory}
          />
        </View>
        <Text style={screenStyles.titleLabel}>
          {Strings.Labels.SCANNINGSUMMARY}
        </Text>

        <CalculationLabel
          value={15}
          secondaryText={Strings.Labels.HOUSEHOLDSCANNED}
        />
        <CalculationLabel
          value={73}
          secondaryText={Strings.Labels.PEOPLESCANNED}
        />
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  titleLabel: {
    fontSize: 16,
    padding: 20,
    paddingLeft: 35,
    color: Colors.paragraphTextColor,
    writingDirection: "rtl"
  },

  Number: {
    fontSize: 16,
    padding: 20,
    color: Colors.paragraphTextColor
  }
});
