import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import I18n from "react-native-i18n";

import { OutlinedTextField, TextField } from "react-native-material-textfield";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class MemeberDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonActive: false
    };
  }
  fieldRef = React.createRef();
  onChangeText(e) {
    console.log("e is: ", e);
  }
  onNextButton() {
    this.props.navigation.navigate("Temperature");
  }
  onBackButton() {
    this.props.navigation.navigate("Home");
  }

  onSubmit = () => {
    let { current: field } = this.fieldRef;

    console.log(field.value());
  };
  render() {
    const { isButtonActive } = this.state;
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.MEMEBERDETAILS} />
        <View style={screenStyles.textInput}>
          <TextField
            label={Strings.Labels.CNICNUMBER}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onChangeText={e => this.onChangeText(e)}
            onSubmitEditing={this.onSubmit}
          />
          <TextField
            label={Strings.Labels.PHONENUMBER}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onChangeText={e => this.onChangeText(e)}
            onSubmitEditing={this.onSubmit}
          />
          <TextField
            label={Strings.Labels.AGE}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onChangeText={e => this.onChangeText(e)}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <Text style={Styles.genderText}>{Strings.Labels.GENDER}</Text>
        <View style={Styles.genderButtonsContainer}>
          <TextButton
            title={Strings.Labels.GENDEROPTIONS.MALE}
            color={!isButtonActive ? Colors.primaryColor : Colors.transparent}
            titleColor={
              !isButtonActive ? Colors.buttonTextColor : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallGenderButton
              // true && Styles.smallGenderButtonActive
            ]}
          />
          <TextButton
            title={Strings.Labels.GENDEROPTIONS.FEMALE}
            olor={isButtonActive ? Colors.primaryColor : Colors.transparent}
            titleColor={
              isButtonActive ? Colors.buttonTextColor : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallGenderButton
              // true && Styles.smallGenderButtonActive
            ]}
          />
          <TextButton
            title={Strings.Labels.GENDEROPTIONS.OTHER}
            olor={isButtonActive ? Colors.primaryColor : Colors.transparent}
            titleColor={
              isButtonActive ? Colors.buttonTextColor : Colors.primaryColor
            }
            shadeBorderRadius={1.5}
            style={[
              Styles.smallGenderButton
              // true && Styles.smallGenderButtonActive
            ]}
          />
        </View>
        <CardView Styles={Styles.Spacer100} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={Strings.ButtonTitles.BACK}
            onPress={() => this.onBackButton()}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
          />
          <RaisedTextButton
            title={Strings.ButtonTitles.NEXT}
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
    paddingRight: 36
  }
});
