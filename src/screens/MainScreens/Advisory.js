import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";

// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import InfoItem from "../../components/InfoItem";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class Advisory extends Component {
  handleCancel = () => {
    this.props.navigation.goBack();
  };
  handleDone = () => {
    this.props.navigation.navigate("HealthScan");
  };
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.ADVISORY`)} />
        <Text style={Styles.topParagraph}>{I18n.t(`Paragarphs.ADVISORY`)}</Text>
        <View style={Styles.Spacer20} />

        {/* Info item */}
        <InfoItem
          title={I18n.t(`Paragarphs.Advisory.HELPLINE.TITLE`)}
          info={I18n.t(`Paragarphs.Advisory.HELPLINE.PHONE`)}
        />
        <InfoItem
          title={I18n.t(`Paragarphs.Advisory.WEBSITE.TITLE`)}
          info={I18n.t(`Paragarphs.Advisory.WEBSITE.URL`)}
        />
        <InfoItem
          title={I18n.t(`Paragarphs.Advisory.MESSAGE.TITLE`)}
          info={I18n.t(`Paragarphs.Advisory.MESSAGE.PHONE`)}
        />
        <View style={Styles.Spacer50} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.CANCEL`)}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleCancel}
          />
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.DONE`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.handleDone}
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
