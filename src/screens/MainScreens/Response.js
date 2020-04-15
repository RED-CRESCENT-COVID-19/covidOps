import React, { Component } from "react";
import { Text, View } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Styles, Colors } from "../../../theme";
const WRITING_STYLE = I18n.locale;
export default class Response extends Component {
  handleContinue = () => {
    this.props.navigation.navigate("Home");
  };
  handleNo = () => {
    this.props.navigation.goBack();
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.RESPONSE`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.RESPONSE`)}
        </Text>
        <CardView Styles={Styles.Spacer300} />
        <CardView Styles={Styles.Spacer100} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.NO`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleNo}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.YES`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleContinue}
          />
        </View>
      </View>
    );
  }
}
