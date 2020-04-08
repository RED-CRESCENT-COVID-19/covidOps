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
    normalisedValue: "fever",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.DRYCOUGH`),
    value: "Dry Cough",
    normalisedValue: "dryCough",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.SPUTUMPRODUCTION`),
    value: "Sputum production",
    normalisedValue: "sputumProduction",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.BLOODINCOUGH`),
    value: "Blood in cough",
    normalisedValue: "bloodInCough",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.FATIGUE`),
    value: "Fatigue",
    normalisedValue: "fatigue",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.HEADACHE`),
    value: "Headache",
    normalisedValue: "headache",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.BODYPAIN`),
    value: "Body pain",
    normalisedValue: "bodyPain",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.SORETHROAT`),
    value: "Sore throat",
    normalisedValue: "soreThroat",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.NASALCONGESTION`),
    value: "Nasal congestion",
    normalisedValue: "nasalCongestion",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.SHORTNESSOFBREATH`),
    value: "Shortness of breath",
    normalisedValue: "shortnessOfBreath",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.REDNESSOFEYES`),
    value: "Redness of eyes",
    normalisedValue: "rednessOfEyes",
    isChecked: false,
  },
  {
    symptomNumber: I18n.t(`Labels.SYMPTOM`),
    symptomName: I18n.t(`Labels.SYMPTOMLIST.DIARRHEA`),
    value: "diarrhea",
    normalisedValue: "diarrhea",
    isChecked: false,
  },
];

export default class Symptoms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSymptomsCheckBoxList: [],
    };
    this.handleCheckboxSymptomsList = this.handleCheckboxSymptomsList.bind(
      this
    );
  }
  createSymptoms = () => {
    var newObject = this.state.selectedSymptomsCheckBoxList.reduce(
      (obj, item) =>
        Object.assign(obj, { [item.normalisedValue]: item.isChecked ? 1 : 0 }),
      {}
    );
    return newObject;
  };
  handleCheckboxSymptomsList(symptom) {
    const newSymptoms = [...this.state.selectedSymptomsCheckBoxList, symptom];
    this.setState({ selectedSymptomsCheckBoxList: newSymptoms }, () => {
      const val = this.createSymptoms();
    });
  }
  handleNext() {
    var symptoms = this.createSymptoms();
    const params = { ...this.props.route.params, ...symptoms };
    this.props.navigation.navigate("OtherSymptoms", params);
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
          <ScrollView
            style={[
              Styles.ScrollView,
              {
                display: "flex",
                paddingLeft: 20,
                paddingRight: 20,
                //flexDirection: "column"
                // alignSelf: "flex-start",
              },
            ]}
          >
            {SYMPTOMS_LIST.map((d, i) => (
              <CheckBox
                key={`${d.symptomNumber} ${i + 1}`}
                symptomNumber={`${d.symptomNumber} ${i + 1}`}
                symptomName={d.symptomName}
                value={d.value}
                checked={d.isChecked}
                normalisedValue={d.normalisedValue}
                handleCheckboxSymptomsList={this.handleCheckboxSymptomsList}
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
