import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, CheckBox, CardView } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;

const SYMPTOMS_LIST = [
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.FEVER`),
    value: "Fever",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.DRYCOUGH`),
    value: "Dry Cough",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.SPUTUMPRODUCTION`),
    value: "Sputum production",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.BLOODINCOUGH`),
    value: "Blood in cough",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.FATIGUE`),
    value: "Fatigue",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.HEADACHE`),
    value: "Headache",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.BODYPAIN`),
    value: "Body pain",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.SORETHROAT`),
    value: "Sore throat",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.NASALCONGESTION`),
    value: "Nasal congestion",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.SHORTNESSOFBREATH`),
    value: "Shortness of breath",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.REDNESSOFEYES`),
    value: "Redness of eyes",
    isChecked: false
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.DIARRHEA`),
    value: "diarrhea",
    isChecked: false
  }
];

export default class Symptoms extends Component {
  handleNext() {
    // console.log(this.props.route.params)
    console.log(this.props.SYMPTOMS_LIST)
    // this.props.navigation.navigate("OtherSymptoms");
  }
  handleBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.SYMPTOMS`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.SYMPTOMS`)}
        </Text>

        <CardView Styles={Styles.Spacer50} />

        {/* Symptoms list view */}
        {SYMPTOMS_LIST.length > 0 && (
          <ScrollView style={Styles.ScrollView}>
            {SYMPTOMS_LIST.map((d, i) => (
              <CheckBox
                key={`${d.symptomNumber} ${i + 1}`}
                symptomNumber={`${d.symptomNumber} ${i + 1}`}
                symptomName={d.symptomName}
                value={d.value}
                checked={d.isChecked}
              />
            ))}
          </ScrollView>
        )}
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={() => this.handleBack()}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
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
