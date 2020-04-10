import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Alert,
  Keyboard,
  AsyncStorage,
} from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, Loader } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

// services
import Http from "../../services/HttpService";

const WRITING_STYLE = I18n.locale;

class SMSService extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, phone: "" };
    this.onSendMessage = this.onSendMessage.bind(this);
    // this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(e) {
    console.log("e is: ", e.targe.value);
    // this.setState({ phone: e.target.value });
  }
  handleContinue = async () => {
    //store Aysc value isAuthenticated == true
    // this.props.navigation.navigate("ConfirmEntry");
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");

    console.log("before state is: ", this.state);
    const { phone } = this.state;
    const isValid = phone.length < 11 && phone.length >= 0;
    if (isValid) {
      this.setState({ isLoading: false });
      Alert.alert(
        "Information!",
        `Please enter valid phone number...!`,
        [
          {
            text: "Cancel",
            onPress: () => {
              console.log("Cancel Pressed");
            },
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              console.log("OK Pressed");
            },
          },
        ],
        { cancelable: false }
      );
      return;
    } else {
      Http.post(
        `infosms`,
        {
          phone,
        },
        { headers: { "access-token": token } }
      )
        .then((res) => {
          console.log("onDeletePerson res is: ", res);
          this.setState({ isLoading: false });

          if (res.status === 400) {
            Alert.alert(
              "Information!",
              `${res.data.message}`,
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    console.log("Cancel Pressed");
                  },
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => {
                    console.log("OK Pressed");
                  },
                },
              ],
              { cancelable: false }
            );
          }
          if (res.status === 204) {
            // this.setState({ data: this.state.data });

            Alert.alert(
              "Information!",
              "Successfully Send Message!",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    console.log("Cancel Pressed");
                    this.props.navigation.navigate("ConfirmEntry");
                  },
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => {
                    console.log("OK Pressed");
                    this.props.navigation.navigate("ConfirmEntry");
                  },
                },
              ],
              { cancelable: false }
            );
          }
          // console.log("this. state data is: ", this.state.apiData);
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          Alert.alert(
            "Information!",
            "Something went wrong, Please try Again!",
            [
              {
                text: "Cancel",
                onPress: () => {
                  console.log("Cancel Pressed");
                },
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => {
                  console.log("OK Pressed");
                },
              },
            ],
            { cancelable: false }
          );
        });
    }
  };
  onSubmit = () => {
    console.log("submit state is: ", this.state);
    Keyboard.dismiss();
  };
  onBlur() {
    Keyboard.dismiss();
  }
  async onSendMessage() {}
  onTimerFinish() {
    Alert.alert(
      `Time is finish to verify the code!`,
      "Keep your app up to date to enjoy the latest features",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  }
  formatText = (text) => {
    return text.replace(/[^+\d]/g, "");
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};

    let loader;
    if (this.state.isLoading) {
      loader = <Loader />;
    } else {
      loader = <View />;
    }

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
            onChangeText={(phone) => this.setState({ phone })}
            maxLength={11}
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
        {loader}
      </View>
    );
  }
}
export default SMSService;
const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  didNotReceivedCode: {
    alignSelf: "center",
  },
});
