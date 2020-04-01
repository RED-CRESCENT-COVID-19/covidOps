import React, { Component } from "react";
import { Text, StyleSheet, View, Alert, Keyboard } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";

//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;

export default class SMSService extends Component {
  handleContinue = () => {
    //store Aysc value isAuthenticated == true
    this.props.navigation.navigate("ConfirmEntry");
  };
  onSubmit() {
    Keyboard.dismiss();
  }
  onBlur() {
    Keyboard.dismiss();
  }
  onTimerFinish() {
    Alert.alert(
      `Time is finish to verify the code!`,
      "Keep your app up to date to enjoy the latest features",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  formatText = text => {
    return text.replace(/[^+\d]/g, "");
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.SMSSERVICE`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.SMSSERVICE`)}
        </Text>
        <View style={Styles.Spacer50} />
        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={I18n.t(`Labels.PHONENUMBER`)}
            keyboardType="phone-pad"
            // activeLineWidth={20}
            placeholder={I18n.t(`Labels.VERIFICATION_CODE_EAMPLE`)}
            returnKeyType={"done"}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
            onBlur={() => this.onBlur()}
          />
        </View>
        <View style={Styles.Spacer50} />

        {/* Spacer */}
        <View style={Styles.Spacer100} />
        <View style={Styles.rightButtonContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
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
    paddingRight: 35
  },
  didNotReceivedCode: {
    alignSelf: "center"
  }
});
