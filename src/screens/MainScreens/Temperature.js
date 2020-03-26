import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { TextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

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
        <Heading headerText={I18n.t(`headings.TEMPERATURE`)} />
        <Text style={Styles.topParagraph}>
          {I18n.t(`Paragarphs.TEMPERATURE`)}
        </Text>
        <View style={screenStyles.textInput}>
          <TextField
            label={I18n.t(`Labels.TEMPERATUREREADING`)}
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
            title={I18n.t(`ButtonTitles.BACK`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleBack}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NEXT`)}
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
