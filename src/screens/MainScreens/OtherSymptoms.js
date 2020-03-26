import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, TextA, CardView } from "../../components";

//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class OtherSymptoms extends Component {
  onNextButton() {
    this.props.navigation.navigate("Temperature");
  }
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.SYMPTOMS`)} />
        <Text style={Styles.topParagraph}>{I18n.t(`Paragarphs.SYMPTOMS`)}</Text>
        <CardView Styles={Styles.Spacer50} />
        {/* Other Symptoms text area */}

        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={I18n.t(`Labels.SYMPTOMLIST.OTHERSYMPTOMS`)}
            // activeLineWidth={20}
            placeholder={I18n.t(`Labels.SYMPTOMLIST.OTHERSYMPTOMSEAMPLE`)}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            multiline
            inputContainerStyle={screenStyles.inputContainerStyle}
            onSubmitEditing={this.onSubmit}
          />
        </View>
        <CardView Styles={Styles.Spacer50} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
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
