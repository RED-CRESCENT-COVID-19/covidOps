import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { OutlinedTextField, TextField } from "react-native-material-textfield";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class MemeberDetails extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.MEMEBERDETAILS} />
        <View style={screenStyles.textInput}>
          <TextField
            label={Strings.Labels.CNICNUMBER}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
          />
          <TextField
            label={Strings.Labels.PHONENUMBER}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
          />
          <TextField
            label={Strings.Labels.AGE}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <Text style={Styles.genderText}>{Strings.Labels.GENDER}</Text>
        <View style={Styles.genderButtonsContainer}>
          <TextButton
            title={Strings.Labels.GENDEROPTIONS.MALE}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallGenderButton}
          />
          <TextButton
            title={Strings.Labels.GENDEROPTIONS.FEMALE}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallGenderButton}
          />
          <TextButton
            title={Strings.Labels.GENDEROPTIONS.OTHER}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallGenderButton}
          />
        </View>
        <CardView Styles={Styles.Spacer100} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={Strings.ButtonTitles.BACK}
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
