import React, { Component } from "react";
import { StyleSheet, View, Keyboard } from "react-native";

import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import { Heading, CardView } from "../../components";

//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;
export default class OtherSymptoms extends Component {
  constructor(props) {
    super(props);
    this.state = { otherSymptoms: "" };
  }
  onNextButton() {
    const otherSymptoms = { otherSymptoms: this.state.otherSymptoms };
    const params = { ...otherSymptoms, ...this.props.route.params };
    this.props.navigation.navigate("Temperature", params);
  }
  onBackButtonClick() {
    this.props.navigation.navigate("Symptoms");
  }
  onSubmit() {
    Keyboard.dismiss();
  }
  onBlur() {
    Keyboard.dismiss();
  }

  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.SYMPTOMS`)} />

        <CardView Styles={Styles.Spacer50} />
        {/* Other Symptoms text area */}

        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={I18n.t(`Labels.SYMPTOMLIST.OTHERSYMPTOMS`)}
            // activeLineWidth={20}
            placeholder={" "}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            // multiline
            returnKeyType={"done"}
            onSubmitEditing={() => this.onSubmit()}
            onChangeText={otherSymptoms =>
              this.setState({ otherSymptoms: otherSymptoms })
            }
            onBlur={() => this.onBlur()}
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
            onPress={() => this.onBackButtonClick()}
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
  }
});
