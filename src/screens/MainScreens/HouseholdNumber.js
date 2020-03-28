import React, { Component } from "react";
import { Text, StyleSheet, View, Keyboard } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, CardView } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;
export default class HouseholdNumber extends Component {
  fieldRef = React.createRef();
  handleContinue = () => {
    this.props.navigation.navigate("HouseHoldDetails");
  };
  handleBack = () => {
    this.props.navigation.goBack();
  };

  onBlur() {
    console.log("onBlur");
    Keyboard.dismiss();
  }

  onSubmit = () => {
    let { current: field } = this.fieldRef;
    Keyboard.dismiss();
    this.setState({ temperature: field.value() });
    console.log("field.value()", field.value());
  };

  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.HOUSEHOLDNUMBER`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.HOUSEHOLDNUMBER`)}
        </Text>

        <CardView Styles={Styles.Spacer50} />

        <OutlinedTextField
          label={I18n.t(`Paragarphs.HOUSEHOLDNUMBERADDRESS`)}
          placeholder={" "}
          tintColor={Colors.primaryColor}
          formatText={this.formatText}
          multiline
          returnKeyType={"done"}
          inputContainerStyle={screenStyles.inputContainerStyle}
          onSubmitEditing={this.onSubmit}
          onBlur={() => this.onBlur()}
          ref={this.fieldRef}
        />

        <Text style={screenStyles.centerText}>
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
    paddingRight: 35
  },
  centerText: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    textAlign: "center"
  },
  inputContainerStyle: {
    margin: 35
  }
});
