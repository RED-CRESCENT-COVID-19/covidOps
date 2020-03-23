import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";

//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class SMSVerification extends Component {
  handleContinue = () => {
    this.props.navigation.navigate("LocationData");
  };
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.SMSVERIFICATION} />
        <Text style={Styles.topParagraph}>
          {Strings.Paragarphs.SMSVERIFICATION}
        </Text>
        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={Strings.Labels.VERIFICATIONCODE}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <View style={Styles.Spacer100} />
        <Text style={{ alignSelf: "center" }}>
          {Strings.Labels.DIDNOTRECIVECODE}
        </Text>
        <View style={Styles.Spacer100} />
        <View style={Styles.rightButtonContainer}>
          <RaisedTextButton
            title={Strings.ButtonTitles.VERIFY}
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
    paddingLeft: 20,
    paddingRight: 20
  }
});
