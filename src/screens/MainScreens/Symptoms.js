import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
import CheckBox from "../../components/CheckBox";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class Symptoms extends Component {
  onNextButton() {
    this.props.navigation.navigate("Temperature");
  }
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.SYMPTOMS} />
        <Text style={Styles.topParagraph}>{Strings.Paragarphs.SYMPTOMS}</Text>
        <CardView Styles={Styles.Spacer50} />
        <CheckBox
          symptomNumber={Strings.Symptom.symptomNumber}
          symptomName={Strings.Symptom.symptomName}
          value={Strings.Symptom.value}
          checked={true}
        />
        <CheckBox
          symptomNumber={Strings.Symptom.symptomNumber}
          symptomName={Strings.Symptom.symptomName}
          value={Strings.Symptom.value}
          checked={true}
        />
        <CheckBox
          symptomNumber={Strings.Symptom.symptomNumber}
          symptomName={Strings.Symptom.symptomName}
          value={Strings.Symptom.value}
          checked={true}
        />
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

const styles = StyleSheet.create({});
