import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

const QUESTIONS_LIST = I18n.t(`QUESTIONS_LIST.NewPrecautions`);
const WRITING_STYLE = I18n.locale;
export default class NewPrecautions extends Component {
  onNextButton() {
    this.props.navigation.navigate("HouseHoldDetails");
  }
  onBackButton() {
    this.props.navigation.navigate("Temperature");
  }
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.PRECAUTIONS`)} />

        <Text style={Styles.topQuestion}>{QUESTIONS_LIST[0].Question}</Text>
        <ScrollView style={Styles.ScrollView}>
          <Text style={[Styles.answer, { textAlign: "center" }]}>
            {QUESTIONS_LIST[0].Answer}
          </Text>
        </ScrollView>
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onBackButton()}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.onNextButton()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
