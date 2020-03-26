import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { TextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class Temperature extends Component {
  
  handleBack = () => {
    this.props.navigation.goBack();
  };

  handleNext = () => {
    this.props.navigation.navigate("Symptoms");
  };
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.TEMPERATURE} />
        <Text style={Styles.topParagraph}>
          {Strings.Paragarphs.TEMPERATURE}
        </Text>
        <View style={screenStyles.textInput}>
          <TextField
            label={Strings.Labels.TEMPERATUREREADING}
            keyboardType="phone-pad"
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onChangeText={e => this.onChangeText(e)}
            onSubmitEditing={this.onSubmit}
          /> 
        </View>
        <CardView Styles={Styles.Spacer300} />

        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={Strings.ButtonTitles.BACK}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleBack}
          />
          <RaisedTextButton
            title={Strings.ButtonTitles.NEXT}
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
    paddingLeft: 20,
    paddingRight: 20
  }
});
