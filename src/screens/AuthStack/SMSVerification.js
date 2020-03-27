import React, { Component } from "react";
import { Text, StyleSheet, View, Alert, AsyncStorage } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
import CountDown from "react-native-countdown-component";

import MyContext from '../../context/MyContext'
// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";

// Service
import Http from '../../services/HttpService';

//Theme
import { Strings, Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;
export default class SMSVerification extends Component {
  constructor(props) {
    super(props);
    this.state = { pin: '',hogiya:''};
  }


  handleContinue = () => {
    const { params } = this.props.route;

    var phone = params.phone
    var pin = this.state.pin;

    Http.post('auth/pin-validation', { phone: phone, pin: pin })
      .then((response) => {
        if(response.status == 200) {
           (async (token) => await AsyncStorage.setItem('AuthToken',token) )(response.data.auth_token);
          //  const {setAuth} = React.useContext(MyContext)
           console.log(this.context(false))
        } else {
          var message = ''
          if(response.status == 400) {
            message = response.data.details.errors.pin[0]
          } else {
            message = response.data.message
          }
          Alert.alert(
            'Info',
            message, [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        }
        // console.log(response);
      }).catch((err) => {
        console.log(err);
      });
    //store Aysc value isAuthenticated == true
    // this.props.navigation.navigate("LocationData");
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
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.SMSVERIFICATION`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.SMSVERIFICATION`)}
        </Text>
        <View style={Styles.Spacer50} />
        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={I18n.t(`Labels.VERIFICATIONCODE`)}
            keyboardType="phone-pad"
            // activeLineWidth={20}
            placeholder={I18n.t(`Labels.VERIFICATION_CODE_EAMPLE`)}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onChangeText={pin => this.setState({pin: pin})}
            maxLength={11}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <View style={Styles.Spacer50} />

        {/* Did not reciev code  */}
        <Text style={screenStyles.didNotReceivedCode}>
          {I18n.t(`Labels.DIDNOTRECIVECODE`)}
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
            title={I18n.t(`ButtonTitles.VERIFY`)}
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
