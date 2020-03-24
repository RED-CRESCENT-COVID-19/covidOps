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
      </View>
    );
  }
}

const styles = StyleSheet.create({});
