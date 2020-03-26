import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
import CheckBox from "../../components/CheckBox";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

const SYMPTOMS_LIST = [
  {
    symptomNumber: "علامت ",
    symptomName: "بخار",
    value: "fever",
    isChecked: false
  },
  {
    symptomNumber: "علامت ",
    symptomName: "چھینکنے",
    value: "dry cough",
    isChecked: false
  },
  {
    symptomNumber: "علامت ",
    symptomName: "کھانسنے",
    value: "dry cough",
    isChecked: false
  },
  {
    symptomNumber: "علامت ",
    symptomName: "سانس لینے میں دقت",
    value: "Shortness of breath",
    isChecked: false
  },
  {
    symptomNumber: "علامت ",
    symptomName: "تھکاوٹ",
    value: "body pain",
    isChecked: false
  },
  {
    symptomNumber: "علامت ",
    symptomName: "نزلہ",
    value: "flu",
    isChecked: false
  },
  {
    symptomNumber: "علامت ",
    symptomName: "تھکاوٹ",
    value: "diarrhea",
    isChecked: false
  }
];

export default class Symptoms extends Component {
  handleNext() {
    this.props.navigation.navigate("Information");
  }
  handleBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.SYMPTOMS} />
        <Text style={Styles.topParagraph}>{Strings.Paragarphs.SYMPTOMS}</Text>

        {/* Symptoms list view */}
        <ScrollView style={Styles.ScrollView}>
          {SYMPTOMS_LIST.map((d, i) => (
            <CheckBox
              symptomNumber={`${d.symptomNumber} ${i + 1}`}
              symptomName={d.symptomName}
              value={d.value}
              checked={d.isChecked}
            />
          ))}
        </ScrollView>
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={Strings.ButtonTitles.BACK}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.handleBack()}
          />
          <RaisedTextButton
            title={Strings.ButtonTitles.NEXT}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.handleNext()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
