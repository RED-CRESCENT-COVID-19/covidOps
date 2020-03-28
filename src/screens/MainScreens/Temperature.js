import React, { Component } from "react";
import { Text, StyleSheet, View, Keyboard } from "react-native";

import { TextField } from "react-native-material-textfield";
import { RaisedTextButton, TextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Styles, Colors } from "../../../theme";

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
    this.props.navigation.navigate("NewPrecautions");
  };
  onChangeText(e) {
    this.setState({ temperature: e });
  }
  onBlur() {
    Keyboard.dismiss();
  }
  formatText = text => {
    return text.replace(/[^+\d]/g, "");
  };
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
  render() {
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
            formatText={this.formatText}
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
