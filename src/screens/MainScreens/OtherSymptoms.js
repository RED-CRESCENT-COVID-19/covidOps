import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import TextA from "../../components/TextA";
import CardView from "../../components/CardView";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class OtherSymptoms extends Component {
  onNextButton() {
    this.props.navigation.navigate("Temperature");
  }
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.SYMPTOMS} />
        <Text style={Styles.topParagraph}>{Strings.Paragarphs.SYMPTOMS}</Text>
        <CardView Styles={Styles.Spacer50} />
        {/* Other Symptoms text area */}

        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={Strings.Labels.SYMPTOMLIST.OTHERSYMPTOMS}
            // activeLineWidth={20}
            placeholder={Strings.Labels.SYMPTOMLIST.OTHERSYMPTOMSEAMPLE}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            multiline
            inputContainerStyle={screenStyles.inputContainerStyle}
            onSubmitEditing={this.onSubmit}
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
    paddingLeft: 35,
    paddingRight: 35
  },
  inputContainerStyle: {
    height: 200,
    paddingBottom: 160
  }
});
