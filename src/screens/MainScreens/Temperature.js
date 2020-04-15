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

//react-redux
import { connect } from "react-redux";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, CardView, Loader } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";
import { MakeId } from "../../utils/Makeid";

//importing action creators
import { createMemeber, setResponse } from "../../actions";

const WRITING_STYLE = I18n.locale;
class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      isButtonActive: false,
      selectedTemperatureButton: "c"
    };
    this.props.toggleResponse();
  }
  fieldRef = React.createRef();

  handleBack = () => {
    this.props.navigation.goBack();
  };

  handleNext = () => {
    this.setState({ isLoading: true });
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

    this.props.createMemberDispatcher(params, token);
  };

  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    const { isButtonActive } = this.state;
    if (this.props.response) {
      if (!this.props.error) {
        this.props.navigation.navigate("NewPrecautions");
      } else {
        Alert.alert(
          "Info",
          this.props.message,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    }
    let loader;
    if (this.props.loading) {
      loader = <Loader />;
    } else {
      loader = <View />;
    }
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
        {loader}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.member.loading,
  error: state.member.error,
  message: state.member.message,
  response: state.member.response
});

const mapDispatchToProps = dispatch => ({
  createMemberDispatcher: (params, token) => {
    return dispatch(createMemeber(params, token));
  },
  toggleResponse: () => dispatch(setResponse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Temperature);

const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35
  }
});
