import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class HouseholdNumber extends Component {
  handleContinue = () => {
    this.props.navigation.navigate("Response");
  };
  handleBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOUSEHOLDNUMBER`)} />
        <Text style={Styles.topParagraph}>
          {I18n.t(`Paragarphs.HOUSEHOLDNUMBER`)}
        </Text>

        <CardView Styles={Styles.Spacer50} />

        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={I18n.t(`Paragarphs.HOUSEHOLDNUMBERADDRESS`)}
            // activeLineWidth={20}
            placeholder={" "}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            multiline
            inputContainerStyle={screenStyles.inputContainerStyle}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <Text style={screenStyles.textInput}>
          {I18n.t(`Paragarphs.HOUSEHOLDNUMBERQUESTION`)}
        </Text>

        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NO`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleBack}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.YES`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleContinue}
          />
        </View>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    textAlign: "center"
  },
  inputContainerStyle: {
    height: 200,
    paddingBottom: 160
  }
});
