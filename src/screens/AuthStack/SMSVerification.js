import React, { Component } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
import CountDown from "react-native-countdown-component";
//Custom Components
import Heading from "../../components/Heading";

//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class SMSVerification extends Component {
  handleContinue = () => {
    this.props.navigation.navigate("LocationData");
  };
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
            // activeLineWidth={20}
            placeholder={Strings.Labels.VERIFICATION_CODE_EAMPLE}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <View style={Styles.Spacer50} />

        {/* Did not reciev code  */}
        <Text style={screenStyles.didNotReceivedCode}>
          {Strings.Labels.DIDNOTRECIVECODE}
        </Text>
        {/* Timer */}
        <CountDown
          until={300} // for five minutes
          // until={10} // for 10 sec for verification the code
          digitStyle={{
            backgroundColor: Colors.transparent
          }}
          digitTxtStyle={{ color: Colors.primaryColor }}
          onFinish={() => this.onTimerFinish()}
          onPress={() => alert("hello, why are you doing this? :p")}
          timeToShow={["M", "S"]}
          showSeparator
          separatorStyle={{ color: Colors.primaryColor }}
          timeLabels={{ m: null, s: null }}
          size={15}
        />
        {/* Spacer */}
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
    paddingLeft: 35,
    paddingRight: 35
  },
  didNotReceivedCode: {
    alignSelf: "center"
  }
});
