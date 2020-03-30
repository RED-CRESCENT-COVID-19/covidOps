import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Keyboard,
  AsyncStorage,
  Alert
} from "react-native";

import { TextField } from "react-native-material-textfield";
import { RaisedTextButton, TextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, CardView } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";
import { MakeId } from "../../utils/Makeid";

// Service
import Http from "../../services/HttpService";

const WRITING_STYLE = I18n.locale;
export default class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      isButtonActive: false,
      selectedTemperatureButton: "c"
    };
  }
  fieldRef = React.createRef();

  handleBack = () => {
    this.props.navigation.goBack();
  };

  handleNext = () => {
    const temperature = {
      selectedTemperatureButton: this.state.selectedTemperatureButton,
      temperature: this.state.temperature
    };
    const data = { ...temperature, ...this.props.route.params };
    this.handleAddMemeber(data);
  };
  onChangeText(e) {
    this.setState({ temperature: e });
  }
  onBlur() {
    Keyboard.dismiss();
  }

  // formatText = text => {
  //   return text.replace(/[^+\d]/g, "");
  // };

  onSubmit = () => {
    let { current: field } = this.fieldRef;
    this.setState({ temperature: field.value() });
  };

  temperatureButtonClick(type) {
    const { selectedTemperatureButton, isButtonActive } = this.state;
    if (type !== selectedTemperatureButton) {
      this.setState({
        selectedTemperatureButton: type,
        isButtonActive: !isButtonActive
      });
    }
  }

  handleAddMemeber = async data => {
    this.setState({ isLoading: true });
    const token = await AsyncStorage.getItem("AuthToken");
    const houseID = await AsyncStorage.getItem("HouseID");
    let id = await MakeId();
    let uniqueID = data.uniqueID || (await MakeId());
    const params = {
      id: id,
      houseID: houseID,
      age: data.age,
      temperature: data.temperature,
      unit: data.selectedTemperatureButton,
      fever: data.fever || 0,
      cough: data.dryCough || 0,
      sputum: data.sputumProduction || 0,
      fatigue: data.fatigue || 0,
      sob: data.shortnessOfBreath || 0,
      headache: data.headache || 0,
      congestion: data.nasalCongestion || 0,
      meralgia: data.bodyPain || 0,
      hemoptysis: data.bloodInCough || 0,
      conjuctivitis: data.rednessOfEyes || 0,
      notes: data.otherSymptoms || "",
      cnic: data.cnic,
      phone: data.phone,
      gender: data.selectedGenderType,
      uniqueID: uniqueID
    };
    console.log(params);
    Http.post("person", params, { headers: { "access-token": token } })
      .then(response => {
        console.log(response);
        this.setState({ isLoading: false });
        if (response.status == 201) {
          this.props.navigation.navigate("NewPrecautions");
        } else {
          this.setState({ isLoading: false });
          var message = response.data.message;
          if (response.status == 400) {
            message = response.data.details.errors.address[0];
          }
          Alert.alert(
            "Info",
            message,
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }
      })
      .catch(err => {});
  };
  render() {
    console.log("temperature this.props is: ", this.props);
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    const { isButtonActive } = this.state;
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.TEMPERATURE`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.TEMPERATURE`)}
        </Text>
        <View style={screenStyles.textInput}>
          <TextField
            label={I18n.t(`Labels.TEMPERATUREREADING`)}
            keyboardType="numeric"
            placeholder={"XX"}
            returnKeyType={"done"}
            tintColor={Colors.primaryColor}
            // formatText={this.formatText}
            onChangeText={e => this.onChangeText(e)}
            onSubmitEditing={this.onSubmit}
            onBlur={() => this.onBlur()}
            ref={this.fieldRef}
          />
        </View>
        <View style={Styles.temperatureButtonsContainer}>
          <TextButton
            title={I18n.t(`Labels.TEMPERATURE.CELSIUS`)}
            color={!isButtonActive ? Colors.primaryColor : Colors.transparent}
            titleColor={
              !isButtonActive ? Colors.buttonTextColor : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallTemperatureButton
              // true && Styles.smallGenderButtonActive
            ]}
            onPress={e => this.temperatureButtonClick("c")}
          />
          <TextButton
            title={I18n.t(`Labels.TEMPERATURE.FAHRENHEIT`)}
            color={isButtonActive ? Colors.primaryColor : Colors.transparent}
            titleColor={
              isButtonActive ? Colors.buttonTextColor : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallTemperatureButton
              // true && Styles.smallGenderButtonActive
            ]}
            onPress={e => this.temperatureButtonClick("f")}
          />
        </View>
        <CardView Styles={Styles.Spacer300} />

        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleBack}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleNext}
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
  }
});
