import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class Temperature extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.TEMPERATURE} />
        <Text style={Styles.topParagraph}>
          {Strings.Paragarphs.TEMPERATURE}
        </Text>
        <CardView Styles={Styles.Spacer300} />

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
    paddingLeft: 20,
    paddingRight: 20
  }
});
