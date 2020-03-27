import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

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
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;

export default class HealthScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true
    };
  }
  handleAddHouseHold = () => {
    this.props.navigation.navigate("HouseholdNumber");
  };
  handleHouseHoldHistory = () => {
    this.props.navigation.navigate("HouseholdHistory");
  };
  onChangeLanguage() {
    console.log("onchange I18n.locale is: ", I18n.locale);
    I18n.locale = "en";
  }
  onHandleChange() {
    console.log("onHandleChange");
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    });
  }
  render() {
    const { isAuthenticated } = this.state;
    const homeIcon = require("../../../assets/images/home.png");
    const historyIcon = require("../../../assets/images/history.png");
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HEALTHSCAN`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.HEALTHSCAN`)}
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
        <View style={Styles.changeLanguagebuttonsContainer}>
          {isAuthenticated && (
            <RaisedTextButton
              title={I18n.t(`ButtonTitles.LOGOUT`)}
              color={Colors.secondaryColor}
              titleColor={Colors.buttonTextColor}
              shadeBorderRadius={1.5}
              style={Styles.smallButton}
              onPress={() => this.onHandleChange()}
            />
          )}
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.TRANSLATION`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onChangeLanguage()}
          />
        </View>
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
