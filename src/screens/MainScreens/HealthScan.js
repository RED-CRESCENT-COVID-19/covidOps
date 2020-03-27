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

import Http from '../../services/HttpService';


const WRITING_STYLE = I18n.locale;
export default class HealthScan extends Component {

  // componentDidMount() {

  // }

  handleAddHouseHold = () => {
    this.props.navigation.navigate("HouseholdNumber");
  };
  handleHouseHoldHistory = () => {
    this.props.navigation.navigate("HouseholdHistory");
  };
  render() {
    const homeIcon = require("../../../assets/images/home.png");
    const historyIcon = require("../../../assets/images/history.png");
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HEALTHSCAN`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.HEALTHSCAN`)}
          {/* {I18n.t(`Paragarphs.HEALTHSCAN`)} */}
        </Text>
        <CardView Styles={Styles.Spacer50} />
        <View style={Styles.largebuttonsContainer}>
          <ExtendedButton
            IconSource={homeIcon}
            title={I18n.t(`ButtonTitles.ADDHOUSEHOLD`)}
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
            title={I18n.t(`ButtonTitles.HOUSEHOLDHISTORY`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.largeButton}
            onPress={this.handleHouseHoldHistory}
          />
        </View>
        <Text style={[screenStyles.titleLabel, style]}>
          {I18n.t(`Labels.SCANNINGSUMMARY`)}
        </Text>

        <CalculationLabel
          value={15}
          secondaryText={I18n.t(`Labels.HOUSEHOLDSCANNED`)}
        />
        <CalculationLabel
          value={73}
          secondaryText={I18n.t(`Labels.PEOPLESCANNED`)}
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
    color: Colors.paragraphTextColor
  },

  Number: {
    fontSize: 16,
    padding: 20,
    color: Colors.paragraphTextColor
  }
});
