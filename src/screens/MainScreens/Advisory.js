import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import { RaisedTextButton } from "react-native-material-buttons";
//Custom Components
import Heading from "../../components/Heading";
import InfoItem from "../../components/InfoItem";
//Theme
import { Strings, Styles, Colors } from "../../../theme";

export default class Advisory extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Heading headerText={Strings.headings.ADVISORY} />
        <Text style={Styles.topParagraph}>{Strings.Paragarphs.ADVISORY}</Text>
        <View style={Styles.Spacer20} />

        {/* Info item */}
        <InfoItem
          title={Strings.Paragarphs.Advisory.HELPLINE.TITLE}
          info={Strings.Paragarphs.Advisory.HELPLINE.PHONE}
        />
        <InfoItem
          title={Strings.Paragarphs.Advisory.WEBSITE.TITLE}
          info={Strings.Paragarphs.Advisory.WEBSITE.URL}
        />
        <InfoItem
          title={Strings.Paragarphs.Advisory.MESSAGE.TITLE}
          info={Strings.Paragarphs.Advisory.MESSAGE.PHONE}
        />
        <View style={Styles.Spacer100} />
        <View style={Styles.buttonsContainer}>
          <RaisedTextButton
            title={Strings.ButtonTitles.CANCEL}
            color={Colors.secondaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
          />
          <RaisedTextButton
            title={Strings.ButtonTitles.DONE}
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
