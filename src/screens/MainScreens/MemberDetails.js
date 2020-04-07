import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  AsyncStorage,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

import { TextField } from "react-native-material-textfield";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, CardView } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

// Utils
import { getRandomInt } from "../../utils/Makeid";

export default class MemberDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonActive: false,
      selectedGenderType: "m",
      cnic: "",
      phone: "",
      age: "",
      isUnderAge: false,
      uniqueID: "",
      houseId: "",
    };
  }
  fieldRef = React.createRef();

  async componentDidMount() {
    const houseId = await AsyncStorage.getItem("HouseID");
    this.setState({ houseId: houseId + "-" + getRandomInt(9999) });
  }
  onChangeText(e) {
    console.log("e is: ", e);
  }

  onNextButton() {
    const { houseId, cnic, phone, age } = this.state;
    const validate =
      age < 18
        ? phone.length === 11 && age.length == 2
        : cnic.length === 13 && phone.length === 11 && age.length == 2;
    if (validate) {
      this.props.navigation.navigate("Symptoms", {
        selectedGenderType: this.state.selectedGenderType,
        cnic: cnic,
        phone: phone,
        age: age,
        uniqueID: houseId,
      });
    } else {
      Alert.alert(
        "Validation Error",
        "Please Enter a Valid Phone number,Valid CNIC and Age to Continue",
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
  }
  onBackButton() {
    this.props.navigation.navigate("HouseHoldDetails", { update: true });
  }

  onChangeCNIC(val) {
    this.setState({ cnic: val });
  }
  onChangePhone(val) {
    this.setState({ phone: val });
  }
  onChangeAge(val) {
    this.setState({ age: val, isUnderAge: val < 18 ? true : false });
  }
  genderButtonClick(type) {
    const { selectedGenderType, isButtonActive } = this.state;
    if (type !== selectedGenderType) {
      this.setState({
        selectedGenderType: type,
        isButtonActive: !isButtonActive,
      });
    }
  }
  onSubmit = () => {
    let { current: field } = this.fieldRef;
    this.setState({ temperature: field.value() });
  };

  onBlur() {
    Keyboard.dismiss();
  }
  formatText = (text) => {
    return text.replace(/[^+\d]/g, "");
  };
  render() {
    const { selectedGenderType, isUnderAge } = this.state;
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.MEMEBERDETAILS`)} />
        <View style={screenStyles.textInput}>
          {/* <KeyboardAvoidingView behavior="padding" enabled> */}
          <TextField
            label={I18n.t(`Labels.AGE`)}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            returnKeyType={"next"}
            ref={(input) => {
              this.firstTextInput = input;
            }}
            onChangeText={(e) => this.onChangeAge(e)}
            // onSubmitEditing={this.onSubmit}
            onSubmitEditing={() => {
              isUnderAge
                ? this.thirdTextInput.focus()
                : this.secondTextInput.focus();
            }}
            // onBlur={() => this.onBlur()}
          />

          <TextField
            label={I18n.t(`Labels.CNICNUMBER`)}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            returnKeyType={"next"}
            disabled={isUnderAge}
            onChangeText={(e) => this.onChangeCNIC(e)}
            // onSubmitEditing={this.onSubmit}
            onSubmitEditing={() => {
              this.thirdTextInput.focus();
            }}
            // onBlur={() => this.onBlur()}
            ref={(input) => {
              this.secondTextInput = input;
            }}
          />

          <TextField
            label={I18n.t(`Labels.PHONENUMBER`)}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onChangeText={(e) => this.onChangePhone(e)}
            returnKeyType={"done"}
            // onSubmitEditing={this.onSubmit}
            onSubmitEditing={() => Keyboard.dismiss()}
            onBlur={() => this.onBlur()}
            ref={(input) => {
              this.thirdTextInput = input;
            }}
          />
          {/* </KeyboardAvoidingView> */}
        </View>
        <Text style={Styles.genderText}>{I18n.t(`Labels.GENDER`)}</Text>
        <View style={Styles.genderButtonsContainer}>
          <TextButton
            title={I18n.t(`Labels.GENDEROPTIONS.MALE`)}
            color={
              selectedGenderType === "m"
                ? Colors.primaryColor
                : Colors.transparent
            }
            titleColor={
              selectedGenderType === "m"
                ? Colors.buttonTextColor
                : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallGenderButton,
              selectedGenderType === "m" && Styles.smallGenderButtonActive,
            ]}
            onPress={(e) => this.genderButtonClick("m")}
          />
          <TextButton
            title={I18n.t(`Labels.GENDEROPTIONS.FEMALE`)}
            color={
              selectedGenderType === "f"
                ? Colors.primaryColor
                : Colors.transparent
            }
            titleColor={
              selectedGenderType === "f"
                ? Colors.buttonTextColor
                : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallGenderButton,
              selectedGenderType === "f" && Styles.smallGenderButtonActive,
            ]}
            onPress={(e) => this.genderButtonClick("f")}
          />
          <TextButton
            title={I18n.t(`Labels.GENDEROPTIONS.OTHER`)}
            color={
              selectedGenderType === "o"
                ? Colors.primaryColor
                : Colors.transparent
            }
            titleColor={
              selectedGenderType === "o"
                ? Colors.buttonTextColor
                : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallGenderButton,
              selectedGenderType === "o" && Styles.smallGenderButtonActive,
            ]}
            onPress={(e) => this.genderButtonClick("o")}
          />
        </View>
        <CardView Styles={Styles.Spacer100} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            onPress={() => this.onBackButton()}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
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

const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 20,
    paddingLeft: 36,
    paddingRight: 36,
  },
});
